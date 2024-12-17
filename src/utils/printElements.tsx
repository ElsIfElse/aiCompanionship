import AnswerTextBlock from "../elements/AnswerTextBlock"


const printElements = function(stringArray:string[] | null){
    if(stringArray === null){
        return null
    }
    return stringArray.map((message)=>(
        message != null ? (
        <div>
            <AnswerTextBlock textInput={message}/>
        </div>
        
        ) : null
    ))
}

export default printElements