interface Header3{
    text:string,

}

const Header3:React.FC<Header3> = ({text}) => {
    return ( 
        <>
            <h2 className={``}>{text}</h2>
        </>
     );
}
 
export default Header3;