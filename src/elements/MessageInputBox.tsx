interface MessageInputBoxProps{
    getUserMessage: (message:string)=>void
    inputValue: string
}

const MessageInputBox:React.FC<MessageInputBoxProps> = ({getUserMessage,inputValue}) => {
    return ( 
        <>
            <textarea value={inputValue} onChange={(e)=>getUserMessage(e.target.value)} placeholder="Send a message..."  className="font-Alef focus:outline-none placeholder-opacity-10 p-2 text-md resize-none w-[70%] h-[40px] rounded-md mx-5"></textarea>
        </>
            
     );
}
 
export default MessageInputBox;