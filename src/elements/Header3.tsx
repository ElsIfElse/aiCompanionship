interface Header3{
    text:string,

}

const Header3:React.FC<Header3> = ({text}) => {
    return ( 
        <>
            <h2 className={`2xl:text-2xl`}>{text}</h2>
        </>
     );
}
 
export default Header3;