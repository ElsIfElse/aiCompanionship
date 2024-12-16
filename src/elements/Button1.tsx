import axios from "axios";

interface ButtonInputs{
    text:string,
}

const Button1:React.FC<ButtonInputs> = ({text}) => {

const clickHandle = function(){
    axios.post('http://localhost:5000/api/messageSending',{
       message:"Aaaaa"
    }).then((res)=>{
        console.log(res.data.message)
    }).catch((error)=>{
        console.log(error)
    })

}

    return ( 
        <>
            <button onClick={()=>clickHandle()} className="bg-slate-500 py-2 px-3 border-none hover:opacity-90 focus:border-none focus:outline-none active:text-slate-400 transition-all duration-200">{text}</button>
        </>
     );
}
 
export default Button1;