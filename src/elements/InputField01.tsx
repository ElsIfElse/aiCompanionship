interface InputField01{
    placeHolder: string
}


const InputField01:React.FC<InputField01> = ({placeHolder}) => {
    return ( 
        <>
            <input className="p-2 rounded-lg hover:opacity-90 active:outline-none active:border-none focus:outline-none transition-all duration-200" placeholder={placeHolder} type="text" />
        </>
     );
}
 
export default InputField01;