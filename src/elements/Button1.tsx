import axios from "axios";
import { useAiAnswerData } from "../utils/useAiAnswer";
import useBotData from "../utils/useBotData";
import { useUserData } from "../utils/useUserData";

interface aiAnswer{
    generated_text:string
}

interface ButtonInputs{
    text:string,
    getMessage:(message:aiAnswer)=>void,
    userMessage:string,
    getUserMessage:(message:string)=>void,
    clearInputField: ()=>void,
    allMessages:string[] | null
}

const Button1:React.FC<ButtonInputs> = ({text,userMessage,getUserMessage,clearInputField,allMessages}) => {

const setAiAnswer = useAiAnswerData((state)=>state.updateAiAnswer)
const aiGender = useBotData((state)=>state.botGender)
const aiPersonality = useBotData((state)=>state.botPersonality)
const userName = useUserData((state)=>state.userName)
const aiName = useBotData((state)=>state.botName)
const userGender = useUserData((state)=>state.userGender)


const clickHandle = function(){
    getUserMessage(userMessage)
    const payload = {
        message:userMessage,
        aiGender:aiGender,
        aiPersonality:aiPersonality,
        userName:userName,
        aiName:aiName,
        allMessages:allMessages,
        userGender:userGender
    }
    clearInputField()
    axios.post('http://localhost:5000/api/messageSending',{
       data:payload
    }).then((res)=>{
        setAiAnswer(res.data)
        console.log(res.data)
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