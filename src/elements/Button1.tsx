import axios from "axios";
import useBotData from "../utils/useBotData";
import { useUserData } from "../utils/useUserData";
import useAnswerArrivedState from "../utils/useStates";
import useMessageHistory from "../utils/useMessageHistory";
import { API_URL } from "../utils/API";

interface ButtonInputs{
    text:string,
    clearInputField: ()=>void,
}

const Button1:React.FC<ButtonInputs> = ({text,clearInputField}) => {

const aiGender = useBotData((state)=>state.botGender)
const aiPersonality = useBotData((state)=>state.botPersonality)
const userName = useUserData((state)=>state.userName)
const aiName = useBotData((state)=>state.botName)
const userGender = useUserData((state)=>state.userGender)
const setAnswerState = useAnswerArrivedState((state)=>state.updateAnswerArrivedState)
const userHobby = useUserData((state)=>state.userHobby)
const setting = useUserData((state)=>state.setting)
const botRelation = useBotData((state)=>state.botRelation)

const setMessageHistory = useMessageHistory((state)=>state.updateMessageHistory)
const messageHistory = useMessageHistory((state)=>state.messageHistory)
const userMessage = useUserData((state)=>state.userMessage)



const clickHandle = async function() {
    setAnswerState(false);
    console.log("Current User Message: ", userMessage);
    
    // Get current message history
    const currentHistory = [...messageHistory];
    const newUserMsg = '-User: ' + userMessage;
    
    // Add new user message to history
    await setMessageHistory(newUserMsg);
    
    // Include both current history and new message in payload
    const payload = {
        message: newUserMsg,
        aiGender: aiGender,
        aiPersonality: aiPersonality,
        userName: userName,
        aiName: aiName,
        messageHistory: [...currentHistory, newUserMsg], // Use updated history
        userGender: userGender,
        userHobby: userHobby,
        setting: setting,
        botRelation: botRelation,
    };
    
    clearInputField();

    try {
        const res = await axios.post(API_URL+'/messageSending', 
            { data: payload },
            { 
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            }
        );
        
        console.log("Payload on Frontend: ", payload);
        const aiMsg = "-AI: " + res.data.message;
        setAnswerState(true);
        await setMessageHistory(aiMsg);
    } catch (error) {
        console.log(error);
    }
};

    return ( 
        <>
            <button onClick={()=>{clickHandle()}}>{text}</button></>
     );
}
 
export default Button1;