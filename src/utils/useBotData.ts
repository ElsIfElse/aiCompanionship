import {create} from 'zustand'
import {persist} from 'zustand/middleware'


export const useBotData = create(
    persist(
    (set) => ({
    botName: "asd",
    updateBotName: (newBotName:string) => {console.log("updating bot name to "+newBotName);set({ botName: newBotName })}
  }),{name:'botData'}))  

export default useBotData