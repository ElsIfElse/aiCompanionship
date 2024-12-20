import {create} from 'zustand'
import {persist} from 'zustand/middleware'


export const useBotData = create(
    persist(
    (set) => ({
    botName: "Jessica",
    botGender:"Female",
    botPersonality:"Friendly",
    botRelation:"Friend",

    updateBotName: (newBotName:string) => {console.log("Updating bot name to :"+newBotName);set({ botName: newBotName })},
    updateBotGender:(newBotGender:string) =>{console.log("Updating Bot Gender to: "+newBotGender);set({botGender: newBotGender})},
    updateBotPersonality: (newBotPersonality:string) => {console.log("Updating bot personality to: "+newBotPersonality);set({ botPersonality: newBotPersonality })},
    updateBotRelation: (newBotRelation:string) => {console.log("Updating bot relation to: "+newBotRelation);set({ botRelation: newBotRelation })},

  }),{name:'botData'}))  

export default useBotData