interface MessageInputBoxProps{
    getUserMessage: (message:string)=>void
    inputValue: string
}

const MessageInputBox:React.FC<MessageInputBoxProps> = ({getUserMessage,inputValue}) => {
    return ( 
        <>
            <textarea value={inputValue} onChange={(e)=>getUserMessage(e.target.value)} placeholder="Send a message..."  className="font-Alef focus:outline-none placeholder-opacity-10 2xl:p-2 2xl:text-md resize-none 2xl:w-[70%] 2xl:h-[40px] rounded-md 2xl:mx-5"></textarea>
        </>
            
     );
}
 
export default MessageInputBox;