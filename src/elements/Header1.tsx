
interface headerInputs{
    text:string,
}

const Header1:React.FC<headerInputs> = ({text}) => {
    return ( 
        <>
            <h1 className={``}>{text}</h1>
        </>
     );
}
 
export default Header1;