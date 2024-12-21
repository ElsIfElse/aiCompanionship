
interface InputField01{
    placeHolder: string,
    action?:(name:string)=>void
}

const InputField01:React.FC<InputField01> = ({placeHolder,action}) => {


    return ( 
        <>
            <input onChange={(e)=>action(e.target.value)} placeholder={placeHolder} type="text" />
        </>
     );
}
  
export default InputField01;