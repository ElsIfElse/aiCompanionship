import {create} from 'zustand'
import {persist} from 'zustand/middleware'


export const useAnswerArrivedState = create(
    persist(
    (set) => ({
    answerArrived: true,

    updateAnswerArrivedState: (answerState:boolean) => {/* console.log("Updating arrive state to: ",answerState) */;set({ answerArrived: answerState})},

  }),{name:'answerArrived'}))  

export default useAnswerArrivedState