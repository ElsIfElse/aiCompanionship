import AnswerTextBlock from "../elements/AnswerTextBlock"
import SentTextBlock from "../elements/SentTextBlock"


const printElements = function(stringArray:string[] | null){
    if(stringArray === null){
        return null
    }
    return stringArray.map((message,index)=>(
        message != null ? 
        <div key={index}>
            {index%2 !== 0 ?         (<div className="w-full flex justify-end">
            {<SentTextBlock textInput={message}/>}
        </div>) :         (<div className="w-full flex">
            {<AnswerTextBlock textInput={message}/>}
        </div>) }
        </div>

        
        : null
    ))
}

export default printElements