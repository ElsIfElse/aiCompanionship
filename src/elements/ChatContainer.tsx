import printElements from "../utils/printElements";
import { useAiAnswerData } from "../utils/useAiAnswer";
import useBotData from "../utils/useBotData";
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


    useEffect(()=>{
        console.log("Bot name: ",botName, '\nUserName: ',userName);
        
    },[botName,userName])

    // const [aiAnswer,setAiAnswer] = useState<string | null>(null)
    const [userMessage,setUserMessage] = useState<string | null>(null)

    const [typedMessage,setTypedMessage] = useState<string>("")
    const [allMessages,setAllMessages] = useState<string[] | null>([])

    const messageWindow = useRef<HTMLDivElement>(null);

    const clearTypedMessage = function(){
        setTypedMessage("");
    }

    const getMessage = function(message:aiAnswer){
        setAiAnswer(message.generated_text)
    }

    useEffect(()=>{
        setAllMessages([...allMessages,aiAnswer])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[aiAnswer])

    // User messages
    const getUserMessage = function(userMessage:string){
        setTypedMessage(userMessage)
    }
    const setUserMessages = function(userMessage:string){
        setUserMessage(userMessage)
    }

    useEffect(()=>{
            setAllMessages([...allMessages,userMessage])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userMessage])

    useEffect(()=>{
         console.log(allMessages)
         if(messageWindow.current){
            messageWindow.current.scrollTop = messageWindow.current.scrollHeight
         }
    },[allMessages])

    useEffect(()=>{
        setAnswerState(true)
    },[])

    return ( 
        <div 
        className="bg-slate-800 border border-slate-700 2xl:w-[50%] lg:min-w-[800px] md:min-w-[800px] xl:min-w-[800px] max-w-[1000px] h-[80%] rounded-md flex flex-col items-center p-5 mb-5">
            <div ref={messageWindow} className="flex h-[100%] bg-slate-700 flex-col w-[100%] rounded-md overflow-auto mb-2">
                {botName && <AnswerTextBlock textInput={`Hey there ${userName}! I am ${botName} Tell me, how *are* you? Spill the tea! ☕️`}/>}
                {allMessages && printElements(allMessages)}
            </div>
            {answerState ? null : <LoadingSign loadText={botName}/>}
            <div className="w-[100%] h-[15%] justify-center flex flex-col items-center">
                <div className="w-[100%] h-[90%] justify-center items-end flex flex-row p-5">
                    <MessageInputBox inputValue={typedMessage} getUserMessage={getUserMessage}></MessageInputBox>
                    <Button1 allMessages={allMessages} userMessage={typedMessage} getMessage={getMessage} getUserMessage={setUserMessages} clearInputField={clearTypedMessage} text="Send"></Button1>
                </div>
            </div>
        </div>
     );
}
 
export default ChatContainer;