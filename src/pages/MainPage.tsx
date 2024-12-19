import ChoiceInput from "../elements/ChoiceInput";
import Header3 from "../elements/Header3";
import InputField01 from "../elements/InputField01";
import Label01 from "../elements/Label01";
import Link01 from "../elements/Link";
import { useAiAnswerData } from "../utils/useAiAnswer";
import useBotData from "../utils/useBotData";
import { useUserData } from "../utils/useUserData";
import {motion} from "motion/react"

const MainPage = () => {

    const setBotName = useBotData((state)=>state.updateBotName)
    const setUserName = useUserData((state)=>state.updateUserName)
    const setUserGender = useUserData((state)=>state.updateUserGender)
    const setBotGender = useBotData((state)=>state.updateBotGender)
    const setPeronality = useBotData((state)=>state.updateBotPersonality)


    const clearStorage = function(){
        localStorage.removeItem('aiAnswerData')
    }

    return ( 
        <div className="flex flex-col items-center justify-center w-screen h-screen ">
            <div className="flex flex-col items-center justify-between w-screen h-[500px]  ">
                <div className="flex flex-col h-[1000px] justify-between items-center mb-10" >

                                        {/* USER SETTING DIV */}
                    <motion.div 
                    
                    animate={{scaleY:[0,1]}}
                    transition={{delay:0.1,duration:0.1}}

                    className="flex flex-col h-[165px] justify-around items-center ">

                        <Header3 text="User Settings"/>
                        <div className="flex flex-col h-[95px] justify-around items-center ">
                            <div className="flex flex-row items-center justify-between w-[300px] ">
                                <Label01 text="Your Name:"/>
                                <InputField01 action={setUserName} placeHolder="Your name..." />
                            </div>
                            <div className="flex flex-row items-center justify-between w-[300px] ">
                                <Label01 text="Your Gender:"/>
                                <ChoiceInput choice01="Male" choice02="Female" choice03="Non Gender" action={setUserGender}/>
                            </div>
                        </div>
                    </motion.div>
                    <motion.hr 
                    
                    animate={{scaleX:[0,1]}}
                    transition={{delay:0.1,duration:0.1}}

                    className="w-[80%] bg-transparent outline-none border-slate-300" />

                                                {/* AI SETTINGS DIV */}
                    <motion.div 
                    
                    animate={{scaleY:[0,1]}}
                    transition={{delay:0.25,duration:0.1}}
                    
                    className="flex flex-col h-[220px] justify-around items-center">

                    <Header3 text="Companion Settings"/>
                        <div className="flex flex-col h-[135px] justify-around items-center ">
                            <div className="flex flex-row items-center justify-between w-[300px] ">
                                <Label01 text="Bot Name:"/>
                                <InputField01 action={setBotName} placeHolder="Bot name..." />
                            </div>
                            <div className="flex flex-row items-center justify-between w-[300px] ">
                                <Label01 text="Bot Gender:"/>
                                <ChoiceInput choice01="Female" choice02="Male" choice03="Non Gender" action={setBotGender}/>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[300px] ">
                                <Label01 text="Bot personality:"/>
                                <ChoiceInput choice01="Sassy" choice02="Friendly" choice03="Mean" choice04="Flirty" action={setPeronality}/>
                            </div>
                        </div>
                    </motion.div>   
                </div>     
            </div>
            <Link01 action={clearStorage} name="Chat" destination="/chat"/>
        </div>
     );
}
 
export default MainPage;