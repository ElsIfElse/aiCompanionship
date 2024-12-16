
interface headerInputs{
    text:string,
    margin:string
}

const Header1:React.FC<headerInputs> = ({text,margin}) => {
    return ( 
        <>
            <h1 className={`text-5xl mb-${margin}`}>{text}</h1>
        </>
     );
}
 
export default Header1;