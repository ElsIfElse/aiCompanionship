import ChatContainer from "../elements/ChatContainer";
import Header3 from "../elements/Header3";
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
        md:p-12">
            <div className="flex flex-col justify-start items-start 2xl:w-[50%] lg:min-w-[800px] xl:min-w-[800px] max-w-[1000px] 
                             md:min-w-[550px] md:w-[95%]">

                <div className="py-1 px-3 bg-[#01A7C2] rounded-tl-2xl rounded-br-2xl relative top-5 ">
                    {/* <SmallText text={`${botName}`}></SmallText> */}
                    <Header3 text={`${botName}`}></Header3>

                </div>
            </div>
            <motion.hr 
                    animate={{scaleX:[0,1]}}
                    transition={{delay:0.1,duration:0.1}}
                    className="" />
            <ChatContainer>
                
            </ChatContainer>
            <div className="
            flex flex-row  w-[300px] justify-around 
            md:w-[400px]
            lg:w-[400px]
            ">
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