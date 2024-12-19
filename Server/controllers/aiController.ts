import { Request, Response } from "express";
import dotenv from 'dotenv';
import { HfInference } from "@huggingface/inference";

dotenv.config();

const token = process.env.HUGGIN_FACE_KEY;
const client = new HfInference(token);

const RETRY_DELAY = 10000; // Delay between retries
const MAX_RETRY_NUM = 3;

const sendMessageToAi = async function (req: Request, res: Response) {
    let CURRENT_RETRY_NUM = 0;

    const getAiResponse = async () => {
        let out = "";

        const userName:string = req.body.data.userName;
        const userMessage:string = req.body.data.message;
        const userGender:string = req.body.data.userGender;

        const aiGender:string = req.body.data.aiGender;
        const aiPersonality:string = req.body.data.aiPersonality
        const aiName:string = req.body.data.aiName
 
        const chatHistoryArray:string[] = req.body.data.allMessages;
        const chatHistory:string = chatHistoryArray.join()

        // console.log(userMessage,aiGender)
        const prePrompt = `This first part is always just a description for you so you do not forget the scenario. We are roleplaying in a scenario where You are a ${aiGender} called ${aiName} texting with a boy  called ${userName} who is the user. You are ${aiPersonality}. The user is a ${userGender} talking to you. Chat history: ${chatHistory}. User says: `;
        console.log("Sending message: ",prePrompt+userMessage); 
        // console.log(token)

        try {
            const stream = client.chatCompletionStream({
                model: "google/gemma-2-9b-it",
                messages: [
                    {
                        role: "user",
                        content:prePrompt+userMessage,
                    },
                ],
                max_tokens: 300,
            });
            // console.log("Checkpoint 1")

            for await (const chunk of stream) {
                try {
                    if (chunk.choices && chunk.choices.length > 0) {
                        const newContent = chunk.choices[0].delta.content;
                        out += newContent;
                        // console.log(newContent);
                    }
                } catch (error) {
                    console.log("Error in chunk processing:", error);
                    throw error; // Throw the error to retry
                }
            }

            // After processing the stream, check if there is output
            if (!out) {
                console.log("There is no output from the server");
                return { message: "No response from AI" }; // Return message instead of sending a response immediately
            }
            console.log("AI: ", out);
            return out; // Return AI's response to be sent later

        } catch (error) {
            console.log("Error in AI response:", error);
            throw error; // Throw error to retry
        }
    };

    // Retry logic
    try {
        const response = await getAiResponse();
        res.status(200).json(response); // Send response only after successful AI response or retry max reached
    } catch (error) {
        if (CURRENT_RETRY_NUM < MAX_RETRY_NUM) {
            CURRENT_RETRY_NUM++;
            console.log(`Retrying... Attempt: ${CURRENT_RETRY_NUM}`);
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY)); // Wait before retrying
            sendMessageToAi(req, res); // Retry the function
            console.log(error)
        } else {
            console.log("Max retries reached. Sending failure response.");
            res.status(500).json({ msg: "Failed after retries" }); // Send failure response after retries are exhausted
        }
    }
};

export { sendMessageToAi };
