import {motion} from "motion/react"
import SmallText from "./SmallText";

interface LoadingSignProps{
    loadText?:string
}

const LoadingSign:React.FC<LoadingSignProps> = ({loadText}) => {
    return ( 
        <div className="flex flex-row items-end"><SmallText text={loadText+" is typing"}/>
                <motion.div 
        animate={{y:["0px","-1px","0px"]}}
        transition={{duration:0.5,
            repeat:Infinity,
            repeatType:"loop",
            delay:0
        }}
                
                className="2xl:w-[3px] relative bottom-1 2xl:h-[3px] bg-slate-100 ml-[2px] rounded-full">
                
                </motion.div>
                <motion.div 
        animate={{y:["0px","-1px","0px"]}}
        transition={{duration:0.5,
            repeat:Infinity,
            repeatType:"loop",
            delay:0.2
        }}
                
                className="2xl:w-[3px] relative bottom-1 2xl:h-[3px] bg-slate-100 ml-[2px] rounded-full">
                
                </motion.div>
                <motion.div 
        animate={{y:["0px","-1px","0px"]}}
        transition={{duration:0.5,
            repeat:Infinity,
            repeatType:"loop",
            delay:0.3
        }}
                
                className="2xl:w-[3px] relative bottom-1 2xl:h-[3px] bg-slate-100 ml-[2px] rounded-full">
                
                </motion.div>
        </div>

     );
}
 
export default LoadingSign;