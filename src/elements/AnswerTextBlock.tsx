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
        
        className="
        max-w-[70%] min-w-[10%] bg-[#FFFF] p-2 rounded-2xl rounded-bl-none my-5 ml-5 flex justify-start border-2 border-[#00000059]
        md:max-w-[65%]
        lg:max-w-[50%]
        ">
            <MessageText text={textInput}></MessageText>
        </motion.div>
     );
}
 
export default AnswerTextBlock;