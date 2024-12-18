import Header2 from "../elements/Header2";
import InputField01 from "../elements/InputField01";
import Label01 from "../elements/Label01";
import Link01 from "../elements/Link";
import useBotData from "../utils/useBotData";
import { useUserData } from "../utils/useUserData";

const MainPage = () => {

    const setBotName = useBotData((state)=>state.updateBotName)
    const setUserName = useUserData((state)=>state.updateUserName)

    return ( 
        <div className="flex flex-col items-center justify-center w-screen h-screen ">
            <Header2 text="Set Your name and bot name" />
            <div className="flex flex-col items-center justify-between w-screen h-[200px]  ">
                <div className="flex flex-col h-[150px] justify-around items-center" >
                    <div className="flex flex-row items-center justify-between w-[300px]">
                        <Label01 text="Your name"/>
                        <InputField01 action={setUserName} placeHolder="Your name..." />
                    </div>
                    <div className="flex flex-row items-center justify-between w-[300px]">
                        <Label01 text="Bot name"/>
                        <InputField01 action={setBotName} placeHolder="Bot name..." />
                    </div>
                </div>

                <Link01 name="Chat" destination="/chat"/>
            </div>
        </div>
     );
}
 
export default MainPage;