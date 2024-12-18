interface SmallTextInput{
    text:string
}

const SmallText:React.FC<SmallTextInput> = ({text}) => {
    return ( 
        <>
            <p className="font-Alef text-sm tracking-wide">{text}</p>
        </>
     );
}
 
export default SmallText;