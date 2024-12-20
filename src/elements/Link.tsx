import {motion} from 'motion/react'

interface LinkProps{
    destination:string,
    name:string,
    action?:()=>void

}

const Link01:React.FC<LinkProps> = ({destination,name,action}) => {

    
    return ( 
        <motion.a 
        
        animate={{opacity:[0,1]}}
        transition={{delay:0.35,duration:0.2}}

        className={`shadow-md 2xl:py-2 2xl:px-10 border-none hover:opacity-90 mt-10 focus:border-none focus:outline-none active:text-slate-400 transition-all duration-200 rounded-md hover:text-slate-300`} href={destination} onClick={action ? ()=>action() : null}>{name}
        </motion.a>
     );
}
 
export default Link01;