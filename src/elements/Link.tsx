import {motion} from 'motion/react'
import { Link } from 'react-router-dom'

interface LinkProps{
    destination:string,
    name:string,
    action?:()=>void,

}

const Link01:React.FC<LinkProps> = ({destination,name,action}) => {

    const noOpFunction = ()=>{}
    
    return ( 
        <motion.div 
        className='flex justify-center items-center'
        animate={{opacity:[0,1]}}
        transition={{delay:0.35,duration:0.2}}>
            <Link
            to={{pathname:destination}} onClick={()=>action ? action() : noOpFunction()}
            >{name}</Link>
            
        </motion.div>
     );
}
 
export default Link01;