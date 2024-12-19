interface MessageText{
    text:string
}

const MessageText:React.FC<MessageText> = ({text}) => {
    return ( 
        <>
            <p className="2xl:text-md text-slate-700">{text}</p>
        </>
     );
}
 
export default MessageText;