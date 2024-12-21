interface SmallTextInput{
    text:string
}

const SmallText:React.FC<SmallTextInput> = ({text}) => {
    return ( 
        <>
            <p className="">{text}</p>
        </>
     );
}
 
export default SmallText;