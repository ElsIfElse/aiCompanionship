import React from "react";

interface Label01Props{
    text:string
}

const Label01:React.FC<Label01Props> = ({text}) => {
    return ( 

        <label>{text}</label>
     );
}
 
export default Label01;