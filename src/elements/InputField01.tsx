
interface InputField01{
    placeHolder: string,
    action?:(name:string)=>void
}

const InputField01:React.FC<InputField01> = ({placeHolder,action}) => {


    return ( 
        <>
            <input onChange={(e)=>action(e.target.value)} className="p-2 rounded-lg hover:opacity-90 active:outline-none active:border-none focus:outline-none transition-all duration-200" placeholder={placeHolder} type="text" />
        </>
     );
}
 
export default InputField01;