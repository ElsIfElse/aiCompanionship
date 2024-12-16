import Button1 from "./Button1";
import MessageInputBox from "./MessageInputBox";
import AnswerTextBlock from "./AnswerTextBlock";
import UserTextBlock from "./UserTextBlock";



const ChatContainer:React.FC= () => {

    return ( 
        <div 
        className="bg-slate-800 border border-slate-700 w-[50%] h-[80%] rounded-md flex flex-col items-center p-5">
            <div className="flex flex-col w-[100%]">
                <AnswerTextBlock text="Hello there!"></AnswerTextBlock>
                <UserTextBlock text="Hello!"></UserTextBlock>
            </div>
            <div className="w-[100%] h-[100%] justify-center items-end flex flex-row p-5">
                <MessageInputBox></MessageInputBox>
                <Button1 text="Send"></Button1>
            </div>
        </div>
     );
}
 
export default ChatContainer;