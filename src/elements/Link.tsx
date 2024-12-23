import {motion} from 'motion/react'

interface LinkProps{
    destination:string,
    name:string,
    action?:()=>void,

}

const Link01:React.FC<LinkProps> = ({destination,name,action}) => {

    const noOpFunction = ()=>{}
    
    return ( 
        <motion.a 
        
        animate={{opacity:[0,1]}}
        transition={{delay:0.35,duration:0.2}}

        href={destination} onClick={()=>action ? action() : noOpFunction()}>{name}
        </motion.a>
     );
}
 
export default Link01;