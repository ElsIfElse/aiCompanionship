import axios from "axios";

interface aiAnswer{
    generated_text:string
}

interface ButtonInputs{
    text:string,
    getMessage:(message:aiAnswer)=>void,
    userMessage:string,
    getUserMessage:(message:string)=>void,
    clearInputField: ()=>void
}

const Button1:React.FC<ButtonInputs> = ({text,getMessage,userMessage,getUserMessage,clearInputField}) => {


const clickHandle = function(){
    getUserMessage(userMessage)
    clearInputField()
    axios.post('http://localhost:5000/api/messageSending',{
       message:userMessage
    }).then((res)=>{
        getMessage(res.data[0])
    }).catch((error)=>{
        console.log(error)
    })

}

    return ( 
        <>
            <button onClick={()=>{clickHandle()}} className="bg-slate-500 py-2 px-3 border-none outline-none hover:opacity-90 focus:border-none focus:outline-none active:text-slate-400 transition-all duration-200">{text}</button>
        </>
     );
}
 
export default Button1;