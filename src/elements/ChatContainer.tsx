import printElements from "../utils/printElements";
import { useAiAnswerData } from "../utils/useAiAnswer";
import useBotData from "../utils/useBotData";
import useMessageHistory from "../utils/useMessageHistory";
import useAnswerArrivedState from "../utils/useStates";
import { useUserData } from "../utils/useUserData";
import AnswerTextBlock from "./AnswerTextBlock";
import Button1 from "./Button1";
import LoadingSign from "./LoadingSign";
import MessageInputBox from "./MessageInputBox";
import { useEffect, useRef, useState } from "react";

const ChatContainer:React.FC= () => {

    interface aiAnswer{
        generated_text:string
    }

    const botName = useBotData((state)=>state.botName)
    const userName = useUserData((state)=>state.userName)
    const aiAnswer = useAiAnswerData((state)=>state.aiAnswer)
    const answerState = useAnswerArrivedState((state)=>state.answerArrived)
    const setAnswerState = useAnswerArrivedState((state)=>state.updateAnswerArrivedState)
    const messageHistory = useMessageHistory((state)=>state.messageHistory)

    const userMessage = useUserData((state)=>state.userMessage)
    const messageWindow = useRef<HTMLDivElement>(null);
    const updateUserMessage = useUserData((state)=>state.updateUserMessage)

    useEffect(()=>{
        //  console.log(allMessages)
         if(messageWindow.current){
            messageWindow.current.scrollTop = messageWindow.current.scrollHeight
         }
        //  console.log("History changed: ",messageHistory)
    },[messageHistory])

    useEffect(()=>{
        setAnswerState(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const clearTypedMessage = function(){
        updateUserMessage("")
    }

    return ( 
        <div 
        className="bg-[#331F40] shadow-xl 2xl:w-[50%] lg:min-w-[800px] md:min-w-[800px] xl:min-w-[800px] max-w-[1000px] h-[80%] rounded-md flex flex-col items-center p-5 mb-5">
            <div ref={messageWindow} className="flex h-[100%] bg-[#6A2473] flex-col w-[100%] rounded-md overflow-auto mb-2">
                {botName && <AnswerTextBlock textInput={`Hey there ${userName}! I am ${botName} Tell me, how *are* you? Spill the tea! ☕️`}/>}
                {messageHistory && printElements(messageHistory)}
            </div>
            {answerState ? null : <LoadingSign loadText={botName}/>}
            <div className="w-[100%] h-[15%] justify-center flex flex-col items-center">
                <div className="w-[100%] h-[90%] justify-center items-end flex flex-row p-5">
                    <MessageInputBox></MessageInputBox>
                    <Button1 clearInputField={clearTypedMessage} text="Send"></Button1>
                </div>
            </div>
        </div>
     );
}
 
export default ChatContainer;