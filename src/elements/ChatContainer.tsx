import printElements from "../utils/printElements";
import Button1 from "./Button1";
import MessageInputBox from "./MessageInputBox";
import { useEffect, useRef, useState } from "react";

const ChatContainer:React.FC= () => {

    interface aiAnswer{
        generated_text:string
    }

    const [aiAnswer,setAiAnswer] = useState<string | null>(null)
    const [userMessage,setUserMessage] = useState<string | null>(null)

    const [typedMessage,setTypedMessage] = useState<string>("")
    const [allMessages,setAllMessages] = useState<string[] | null>(["Hi! How may i help you?"])


    const getMessage = function(message:aiAnswer){
        setAiAnswer(message.generated_text)
    }

    useEffect(()=>{
        if(allMessages?.length === 1){
            return
        }
            setAllMessages([...allMessages,aiAnswer])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[aiAnswer])

    // User messages
    const getUserMessage = function(userMessage:string){
        setTypedMessage(userMessage)
    }

    const setUserMessages = function(userMessage:string){
        setUserMessage(userMessage)
        setAllMessages([...allMessages,aiAnswer])
    }


    useEffect(()=>{
        if(allMessages?.length === 1){
            return
        }

            setAllMessages([...allMessages,userMessage])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userMessage])

    useEffect(()=>{
         console.log(allMessages)
    },[allMessages])

    return ( 
        <div 
        className="bg-slate-800 border border-slate-700 w-[50%] h-[80%] rounded-md flex flex-col items-center p-5">
            <div className="flex flex-col w-[100%]">
                {printElements(allMessages)}
            </div>
            <div className="w-[100%] h-[100%] justify-center items-end flex flex-row p-5">
                <MessageInputBox getUserMessage={getUserMessage}></MessageInputBox>
                <Button1 userMessage={typedMessage} getMessage={getMessage} getUserMessage={setUserMessages} text="Send"></Button1>
            </div>
        </div>
     );
}
 
export default ChatContainer;