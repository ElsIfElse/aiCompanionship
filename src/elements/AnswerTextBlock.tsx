import MessageText from "./MessageText";
import {motion} from "motion/react"

interface AnswerTextBlock{
    textInput:string
}

const AnswerTextBlock:React.FC<AnswerTextBlock> = ({textInput}) => {
    return ( 

        <motion.div
        
        animate={{opacity:[0,100],scale:[0.8,1],x:[100,0]}}
        transition={{duration:0.2}}
        
        className="w-[40%] bg-slate-300 p-2 rounded-md rounded-bl-none my-5 ml-5 flex justify-start">
            <MessageText text={textInput}></MessageText>
        </motion.div>
     );
}
 
export default AnswerTextBlock;