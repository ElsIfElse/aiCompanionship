
interface headerInputs{
    text:string,
}

const Header1:React.FC<headerInputs> = ({text}) => {
    return ( 
        <>
            <h1 className={`2xl:text-5xl 2xl:mb-10`}>{text}</h1>
        </>
     );
}
 
export default Header1;