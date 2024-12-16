import MessageText from "./MessageText";
import {motion} from "motion/react"

interface AnswerTextBlock{
    text:string
}

const AnswerTextBlock:React.FC<AnswerTextBlock> = ({text}) => {
    return ( 

        <motion.div
        
        animate={{opacity:[0,100],scale:[0,1],x:[-500,0]}}
        transition={{duration:0.1}}
        
        className="w-[40%] bg-slate-300 p-2 rounded-md rounded-bl-none my-5 ml-5">
            <MessageText text={text}></MessageText>
        </motion.div>
     );
}
 
export default AnswerTextBlock;