interface Header2{
    text:string
}

const Header2:React.FC<Header2> = ({text}) => {
    return ( 
        <>
            <h2 className="2xl:text-3xl 2xl:mb-10">{text}</h2>
        </>
     );
}
 
export default Header2;