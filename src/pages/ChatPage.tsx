import Button1 from "../elements/Button1";
import ChatContainer from "../elements/ChatContainer";
import Header2 from "../elements/Header2";
import Link01 from "../elements/Link";
import useBotData from "../utils/useBotData";
import useMessageHistory from "../utils/useMessageHistory";
import {motion} from 'motion/react'

const ChatPage = () => {

    const botName = useBotData((state)=>state.botName)
    const resetHistory = useMessageHistory((state)=>state.deleteMessageHistory)

    return ( 
        <div className="
        flex flex-col items-center justify-center h-screen w-screen p-5
        md:p-12
        ">
            <Header2 text={`Chatting with ${botName}`}></Header2>
            <motion.hr 
                    
                    animate={{scaleX:[0,1]}}
                    transition={{delay:0.1,duration:0.1}}
                    className="" />
            <ChatContainer>
                
            </ChatContainer>
            <div className="flex flex-row  w-[20%] justify-around">
                <Link01 destination="/" name="Back To Menu" />
                <motion.button 
                        animate={{opacity:[0,1]}}
                        transition={{delay:0.35,duration:0.2}}
                onClick={resetHistory}>Delete History</motion.button>
            </div>
        </div>
     ); 
}

export default ChatPage;