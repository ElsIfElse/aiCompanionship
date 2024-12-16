import Button1 from "../elements/Button1";
import Header1 from "../elements/Header1";
import Header2 from "../elements/Header2";
import InputField01 from "../elements/InputField01";
import LoadingSign from "../elements/LoadingSign";
import MessageInputBox from "../elements/MessageInputBox";
import SmallText from "../elements/SmallText";
import TextBlock from "../elements/AnswerTextBlock";

const MainPage = () => {
    return ( 
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <Header1 margin="10" text="Hello World"></Header1>
            <Header2 text="Hello World"></Header2>
            <InputField01 placeHolder="Type here..."></InputField01>
            <Button1 text="Press me senpai"></Button1>
            <SmallText text="It is a small text"></SmallText>
            <LoadingSign></LoadingSign>
            <TextBlock text="Hello there!"></TextBlock>
            <MessageInputBox></MessageInputBox>
        </div>
     );
}
 
export default MainPage;