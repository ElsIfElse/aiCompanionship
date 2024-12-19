import MessageText from "./MessageText";
import {motion} from "motion/react"

interface UserTextBlock{
    text:string
}

const UserTextBlock:React.FC<UserTextBlock> = ({text}) => {
    return ( 

        <div className="w-full flex flex-row justify-end">
            <motion.div

            animate={{opacity:[0,100],scale:[0,1],x:[0,500]}}
            transition={{duration:0.1}}

            className="2xl:w-[40%] bg-slate-300 2xl:p-2 rounded-md rounded-br-none 2xl:my-5 2xl:mr-5">
                <MessageText text={text}></MessageText>
            </motion.div>
        </div>
     );
}
 
export default UserTextBlock;