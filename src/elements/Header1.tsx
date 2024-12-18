
interface headerInputs{
    text:string,
}

const Header1:React.FC<headerInputs> = ({text}) => {
    return ( 
        <>
            <h1 className={`text-5xl mb-10`}>{text}</h1>
        </>
     );
}
 
export default Header1;