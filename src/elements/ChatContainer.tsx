import printElements from "../utils/printElements";
import useBotData from "../utils/useBotData";
import useMessageHistory from "../utils/useMessageHistory";
import useAnswerArrivedState from "../utils/useStates";
import { useUserData } from "../utils/useUserData";
import AnswerTextBlock from "./AnswerTextBlock";
import Button1 from "./Button1";
import LoadingSign from "./LoadingSign";
import MessageInputBox from "./MessageInputBox";
import { useEffect, useRef } from "react";

const ChatContainer:React.FC= () => {


    const botName = useBotData((state)=>state.botName)
    const userName = useUserData((state)=>state.userName)
    const answerState = useAnswerArrivedState((state)=>state.answerArrived)
    const setAnswerState = useAnswerArrivedState((state)=>state.updateAnswerArrivedState)
    const messageHistory = useMessageHistory((state)=>state.messageHistory)

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
        className="bg-[#FFF] shadow-xl 2xl:w-[50%] lg:min-w-[800px]  xl:min-w-[800px] max-w-[1000px] h-[80%] rounded-md  flex flex-col items-center p-5 mb-5
        md:min-w-[550px] md:w-[95%]
        ">
            <div ref={messageWindow} className=" flex h-[100%] flex-col w-[100%] rounded-md overflow-auto mb-2">
                {botName && <AnswerTextBlock textInput={`Hey there ${userName}! I am ${botName} Tell me, how *are* you? Spill the tea! ☕️`}/>}
                {messageHistory && printElements(messageHistory)}
            </div>
            <hr  className="w-[90%] bg-transparent outline-none border-[#00000027]" />
            {answerState ? null : <LoadingSign loadText={botName}/>}
            <div className="w-[100%] h-[15%] justify-center flex flex-col items-center">
                <div className="w-[100%] h-[90%] justify-center items-center flex flex-row p-5">
                    <MessageInputBox></MessageInputBox>
                    <Button1 clearInputField={clearTypedMessage} text="Send"></Button1>
                </div>
            </div>
        </div>
     );
}
 
export default ChatContainer;