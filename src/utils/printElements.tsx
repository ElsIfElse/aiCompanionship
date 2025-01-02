import AnswerTextBlock from "../elements/AnswerTextBlock"
import SentTextBlock from "../elements/SentTextBlock"
import React from "react";


const printElements = function(stringArray:string[] | null){
    if(stringArray === null){
        return null
    }

    const newArray:string[] = cutOffBeginningOfString(stringArray)
    // console.log("Regexed Array: ",newArray)

    return newArray.map((message,index)=>(
        message != null ? 
        <div key={index}>
            {index%2 == 0 ? (<div className="w-full flex justify-end">
            {<SentTextBlock textInput={message}/>}
        </div>) 
        
        :
        
        (<div className="w-full flex">
            {<AnswerTextBlock textInput={message}/>}
        </div>) }
        </div>

        
        : null
    ))
}

const regex = /^-AI:\s*(.*)/
const regex2 = /^-User:\s*(.*)/

const cutOffBeginningOfString = (stringArray:string[]):string[]=>{

    return stringArray.map((string:string)=>{
        if(string.includes("AI")){
            const match = string.match(regex)
            return match ? match[1] : ""
        }
        if(string.includes("User")){
            const match = string.match(regex2)
            return match ? match[1] : ""
         }    
        return string
    })
}

export default printElements