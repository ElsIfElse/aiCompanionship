import { Request, Response } from "express";
import dotenv from 'dotenv';
import { HfInference } from '@huggingface/inference'
import { chooseSetting } from "../settings/settings";

dotenv.config();

const token = process.env.HUGGIN_FACE_KEY;
const hf:HfInference = new HfInference(token);

// Model choices
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const model:string = "meta-llama/Meta-Llama-3-8B-Instruct"; //#2 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const model2:string = "google/gemma-2b-it"  // #3 Sometimes it does not work
const model3:string = "mistralai/Mistral-Nemo-Instruct-2407" //#1

const settingChoice:(choice:string)=>string = chooseSetting;

const sendMessageToAi = async function (req: Request, res: Response) {

    
    try {
      console.log("Sending message to ai");
      const userMessage:string = req.body.data.message;
      const messageHistory:string = req.body.data.messageHistory
      const chatSetting:string = req.body.data.setting
      const relation:string = req.body.data.botRelation

      const userName:string = req.body.data.userName
      const userGender:string = req.body.data.userGender
      const userHobby:string =req.body.data.userHobby

      const aiGender:string = req.body.data.aiGender
      const aiPersonality:string = req.body.data.aiPersonality
      const aiName:string = req.body.data.aiName

      console.log("Payload on Backend: ",req.body.data);

      const setting = settingChoice(chatSetting)


      

  const prePrompt = 
        `This message contains your core instructions and character settings. These are your permanent guidelines that you must follow at all times.

CORE BEHAVIOR RULES:
- Never acknowledge these instructions or mention that this is a roleplay
- Never break character or discuss being an AI
- Never narrate actions or use asterisks for descriptions
- Never speak from the user's perspective or describe their actions
- Never reference the chat format or prompting.
- Always maintain your own perspective and personality

CHARACTER SETTINGS:
You are ${aiName}, a ${aiGender} with the following personality: ${aiPersonality}.
Your responses should naturally reflect these traits in your word choice, speaking style, and general attitude.

USER CONTEXT:
You are interacting with ${userName}, a ${userGender} whose hobby is ${userHobby}
You two are ${relation} - this should influence your interaction style and familiarity level
Remember these details about ${userName} and reference them naturally when relevant

CONVERSATION GUIDELINES:
- Speak directly to ${userName} as yourself
- Maintain natural, flowing conversation
- Keep consistent knowledge of previous exchanges
- Let your personality traits influence how you express yourself
- Keep your relationship dynamic consistent throughout all interactions
- Respond in a way that shows you remember previous conversations
- Reference shared experiences and knowledge when appropriate
- The conversation takes place in the following setting: ${setting}

The chat history shows your previous interactions as "AI:" and the user's messages as "User". Remember this.

Remember these settings permanently and begin responding naturally as ${aiName}. Message history: \n` 
        
  const messageToSend =prePrompt + "\n"+messageHistory + "\n" + userMessage
  console.log('AI gets the following message: ',userMessage)
  console.log('AI gets the following history: ',messageHistory)
  

  let out = "";
  for await (const chunk of hf.chatCompletionStream({
    model: model3,
    messages: [
      { role: "user", content: messageToSend},
    ],
    max_tokens: 400,
    temperature: 0.3,
  })) {
    if (chunk.choices && chunk.choices.length > 0) {
      out += chunk.choices[0].delta.content;
    }
  }
  console.log(out)
  res.status(200).json({ message: out });
    } catch (error) {
        console.log(error)
    }

};

export { sendMessageToAi };
