import ChoiceInput from "../elements/ChoiceInput";
import InputField01 from "../elements/InputField01";
import Label01 from "../elements/Label01";
import Link01 from "../elements/Link";
import useBotData from "../utils/useBotData";
import { useUserData } from "../utils/useUserData";
import {motion} from "motion/react"
import Header2 from "../elements/Header2";

const MainPage = () => {

    const setBotName = useBotData((state)=>state.updateBotName)
    const setUserName = useUserData((state)=>state.updateUserName)
    const setUserGender = useUserData((state)=>state.updateUserGender)
    const setBotGender = useBotData((state)=>state.updateBotGender)
    const setPeronality = useBotData((state)=>state.updateBotPersonality)
    const setSetting = useUserData((state)=>state.updateSetting)
    const setHobby = useUserData((state)=>state.updateHobby)
    const setRelation = useBotData((state)=>state.updateBotRelation)


    const clearStorage = function(){
        localStorage.removeItem('aiAnswerData')
    }

    return ( 
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <div className="
            flex flex-col items-center justify-between w-screen h-[700px] 
            lg:h-[800px] lg:mb-12
            ">
                <div className="flex flex-col h-[1000px] justify-between items-center mb-10
                lg:w-[800px] lg:justify-around  
                " >

                                        {/* USER SETTING DIV */}
                    <motion.div 
                    
                    animate={{scaleY:[0,1]}}
                    transition={{delay:0.1,duration:0.1}}

                    className="
                    flex flex-col h-[235px] justify-around items-center
                    lg:justify-between
                    ">

                        <Header2 text="User Settings"/>
                        <div className="flex flex-col h-[135px] justify-around items-center ">
                            <div className="flex flex-row items-center justify-between w-[350px] ">
                                <Label01 text="Your Name:"/>
                                <InputField01 action={setUserName} placeHolder="Your name..." />
                            </div>
                            <div className="flex flex-row items-center justify-between w-[350px] ">
                                <Label01 text="Your Gender:"/>
                                <ChoiceInput choice01="Male" choice02="Female" choice03="Non Gender" action={setUserGender}/>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[350px] ">
                                <Label01 text="Your Hobby:"/>
                                <InputField01 action={setHobby} placeHolder="Your Hobby..." />
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
                    
                    className="
                    flex flex-col h-[325px] justify-around items-center
                    lg:justify-between
                    ">

                    <Header2 text="Companion Settings"/>
                        <div className="flex flex-col h-[225px] justify-around items-center ">
                            <div className="flex flex-row items-center justify-between w-[350px] ">
                                <Label01 text="Bot Name:"/>
                                <InputField01 action={setBotName} placeHolder="Bot name..." />
                            </div>
                            <div className="flex flex-row items-center justify-between w-[350px] ">
                                <Label01 text="Bot Gender:"/>
                                <ChoiceInput choice01="Female" choice02="Male" choice03="Non Gender" action={setBotGender}/>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[350px] ">
                                <Label01 text="Bot personality:"/>
                                <ChoiceInput choice01="Sassy" choice02="Friendly" choice03="Mean" choice04="Flirty" action={setPeronality}/>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[350px] ">
                                <Label01 text="Bot-User relation:"/>
                                <ChoiceInput choice01="Best Friends" choice02="Mentor-Student" choice03="Love interests" choice04="Enemies" action={setRelation}/>
                            </div>
                            <div className="flex flex-row items-center justify-between w-[350px] ">
                                <Label01 text="Setting:"/>
                                <ChoiceInput choice01="Cafe in Paris" choice02="Park" choice03="Texting" action={setSetting}/>
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