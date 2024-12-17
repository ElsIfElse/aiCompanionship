interface MessageInputBoxProps{
    getUserMessage: (message:string)=>string
}

const MessageInputBox:React.FC<MessageInputBoxProps> = ({getUserMessage}) => {
    return ( 
        <>
            <textarea onChange={(e)=>getUserMessage(e.target.value)} placeholder="Send a message..."  className="placeholder-opacity-10 p-2 text-md resize-none w-[70%] h-[40px] rounded-md mx-5"></textarea>
        </>
            
     );
}
 
export default MessageInputBox;