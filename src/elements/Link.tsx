interface LinkProps{
    destination:string,
    name:string,
    onClick?:()=>void | undefined
}

const Link01:React.FC<LinkProps> = ({destination,name,onClick}) => {
    return ( 
        <a onClick={onClick ? ()=>onClick() : undefined} className="bg-slate-500 py-2 px-3 border-none hover:opacity-90 focus:border-none focus:outline-none active:text-slate-400 transition-all duration-200 rounded-md hover:text-slate-300" href={destination}>{name}</a>
     );
}
 
export default Link01;