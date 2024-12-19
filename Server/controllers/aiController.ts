import { Request, Response } from "express";
import dotenv from 'dotenv';
import { HfInference } from "@huggingface/inference";

dotenv.config();

const token = process.env.HUGGIN_FACE_KEY;
const client = new HfInference(token);

const RETRY_DELAY = 10000; // Delay between retries
const MAX_RETRY_NUM = 3;

const sendMessageToAi = async function (req: Request, res: Response) {
    console.log("Checkpoint 1");
    let CURRENT_RETRY_NUM = 0;

    const getAiResponse = async () => {
        console.log("Checkpoint 2");
        let aiResponse = "";

        try {
            const {
                userName = '',
                message: userMessage = '',
                userGender = '',
                aiGender = '',
                aiPersonality = '',
                aiName = '',
                allMessages: chatHistoryArray = []
            } = req.body.data || {};

            const chatHistory = chatHistoryArray.join(", ");
            const prompt = `This first part is always just a description for you so you do not forget the scenario. We are roleplaying in a scenario where You are a ${aiGender} called ${aiName} texting with a ${userGender} called ${userName} who is the user. You are ${aiPersonality}. Chat history: ${chatHistory}. User texts: ${userMessage}`;

            console.log("Sending message: ", prompt);

            const stream = client.chatCompletionStream({
                model: "google/gemma-2-9b-it",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                max_tokens: 500,
            });

            console.log("Checkpoint 4");
            for await (const chunk of stream) {
                console.log("Checkpoint 5");
                if (!chunk || !chunk.choices || chunk.choices.length === 0) {
                    console.log("Invalid chunk received:", chunk);
                    continue;
                }
                const newContent = chunk.choices[0]?.delta.content || '';
                console.log("Checkpoint 6");
                aiResponse += newContent;
            }

            if (!aiResponse) {
                console.log("No output from the server");
                return { message: "No response from AI" };
            }

            console.log("Checkpoint 7");
            return aiResponse;

        } catch (error) {
            console.log("Error in AI response:", error);
            throw error;
        }
    };

    console.log("Checkpoint 8");

    // Retry logic
    try {
        console.log('Getting response');
        const response = await getAiResponse();
        console.log("Checkpoint 9");
        res.status(200).json(response); // Send response only after successful AI response
    } catch (error) {
        if (CURRENT_RETRY_NUM < MAX_RETRY_NUM) {
            CURRENT_RETRY_NUM += 1;
            console.log(`Retrying... Attempt: ${CURRENT_RETRY_NUM}`);
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY)); // Wait before retrying
            sendMessageToAi(req, res); // Retry the function
            console.log(error);
        } else {
            console.log("Max retries reached. Sending failure response.");
            res.status(500).json({ msg: "Failed after retries" }); // Send failure response after retries are exhausted
        }
    }
};

export { sendMessageToAi };
