import {motion} from "motion/react"

const LoadingSign = () => {
    return ( 
        <div className="flex flex-row">
                <motion.div 
        animate={{y:["0px","-2px","0px"]}}
        transition={{duration:0.5,
            repeat:Infinity,
            repeatType:"loop",
            delay:0
        }}
                
                className="w-[10px] h-[10px] border-slate-700 border-2 bg-slate-400 rounded-full">
                
                </motion.div>
                <motion.div 
        animate={{y:["0px","-2px","0px"]}}
        transition={{duration:0.5,
            repeat:Infinity,
            repeatType:"loop",
            delay:0.1
        }}
                
                className="w-[10px] h-[10px] border-slate-700 border-2 bg-slate-400 rounded-full">
                
                </motion.div>
                <motion.div 
        animate={{y:["0px","-2px","0px"]}}
        transition={{duration:0.5,
            repeat:Infinity,
            repeatType:"loop",
            delay:0.2
        }}
                
                className="w-[10px] h-[10px] border-slate-700 border-2 bg-slate-400 rounded-full">
                
                </motion.div>
        </div>

     );
}
 
export default LoadingSign;