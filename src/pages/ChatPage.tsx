import ChatContainer from "../elements/ChatContainer";
import Header2 from "../elements/Header2";
import Link01 from "../elements/Link";
import useBotData from "../utils/useBotData";


const ChatPage = () => {

    const botName = useBotData((state)=>state.botName)

    return ( 
        <div className="flex flex-col items-center h-screen w-screen p-12">
            <Header2 text={`Chatting with ${botName}`}></Header2>
            <ChatContainer>
                
            </ChatContainer>
            <Link01 destination="/" name="Back To Menu" />
        </div>
     );
}

export default ChatPage;