interface Header3{
    text:string,

}

const Header3:React.FC<Header3> = ({text}) => {
    return ( 
        <>
            <h3 className={``}>{text}</h3>
        </>
     );
}
 
export default Header3;