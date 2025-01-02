import React from "react";

interface InputField01{
    placeHolder: string,
    action?:(name:string)=>void
}

const InputField01:React.FC<InputField01> = ({placeHolder,action}) => {


    return ( 
        <>
            <input onChange={(e)=>action ? action(e.target.value) : null} placeholder={placeHolder} type="text" />
        </>
     );
}
  
export default InputField01;