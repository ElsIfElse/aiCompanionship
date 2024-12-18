interface Header2{
    text:string
}

const Header2:React.FC<Header2> = ({text}) => {
    return ( 
        <>
            <h2 className="text-3xl mb-10">{text}</h2>
        </>
     );
}
 
export default Header2;