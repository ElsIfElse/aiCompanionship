import MessageText from "./MessageText";
import {motion} from "motion/react"

interface SentTextBlock{
    textInput:string
}

const SentTextBlock:React.FC<SentTextBlock> = ({textInput}) => {
    return ( 

        <motion.div
        
        animate={{opacity:[0,100],scale:[0.8,1],x:[-100,0]}}
        transition={{duration:0.2}}
        
        className="
        w-[70%] bg-[#E4E0E1] p-2 rounded-md rounded-br-none my-5 mr-5 flex justify-start
        md:w-[65%]
        lg:w-[50%]
        ">
            <MessageText text={textInput}></MessageText>
        </motion.div>
     );
}
 
export default SentTextBlock;