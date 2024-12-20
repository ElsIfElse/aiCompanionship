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
        <div className="flex flex-col items-center h-screen w-screen p-12">
            <Header2 text={`Chatting with ${botName}`}></Header2>
            <motion.hr 
                    
                    animate={{scaleX:[0,1]}}
                    transition={{delay:0.1,duration:0.1}}
                    className="w-[20%] bg-transparent outline-none border-slate-300 mb-10" />
            <ChatContainer>
                
            </ChatContainer>
            <Link01 destination="/" name="Back To Menu" />
            {/* <button onClick={resetHistory}>Delete History</button> */}
        </div>
     );
}

export default ChatPage;