export interface UseUserDataInterface{
    userName: string,
    userGender: string,
    userHobby: string,
    setting: string,
    userMessage: string,

    updateUserName: (newUserName:string)=>void,
    updateUserGender: (newGender:string)=>void,
    updateHobby: (newHobby:string)=>void,
    updateSetting: (newSetting:string)=>void,
    updateUserMessage: (newMessage:string)=>void,
}

export interface UseStateInterface{
    answerArrived:boolean,
    updateAnswerArrivedState:(newState:boolean)=>void
}

export interface MessageHistoryInterface {
    messageHistory: string[];
    updateMessageHistory: (newMessage: string) => Promise<void>;
    deleteMessageHistory: () => Promise<void>;
}

export interface UseBotDataInterface{

    botName:string ,
    botGender: string,
    botPersonality: string,
    botRelation: string,

    updateBotName: (newName:string)=>void,
    updateBotGender: (newGender:string)=>void,
    updateBotPersonality: (newBotPersonality:string)=>void,
    updateBotRelation: (newBotRelation:string)=>void,
}

export interface UseAiAnswerData{
    aiAnswer:string,
    updateAiAnswer:(newAnswer:string)=>void
}