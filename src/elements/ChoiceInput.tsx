
interface ChoiceInputProps{
    action:(gender:string)=>void,
    choice01:string,   
    choice02:string,
    choice03:string,
    choice04?:string,
}

const ChoiceInput:React.FC<ChoiceInputProps> = ({action,choice01,choice02,choice03,choice04}) => {
    return ( 
        <select onChange={(e)=>action(e.target.value)} name="" id="">
            <option value={choice01}>{choice01}</option>
            <option value={choice02}>{choice02}</option>
            {choice03 ? <option value={choice03}>{choice03}</option> : null}
            {choice04 ? <option value={choice04}>{choice04}</option> : null}
        </select>
     );
}
 
export default ChoiceInput;