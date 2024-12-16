import ChatContainer from "../elements/ChatContainer";
import Header1 from "../elements/Header1";


const ChatPage = () => {
    return ( 
        <div className="flex flex-col items-center h-screen w-screen p-12">
            <Header1 margin="10" text="Chat with Veronica"></Header1>
            <ChatContainer>
                
            </ChatContainer>
            
        </div>
     );
}
 
export default ChatPage;