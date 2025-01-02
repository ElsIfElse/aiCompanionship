import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { UseStateInterface } from './interfaces'


export const useAnswerArrivedState = create<UseStateInterface>()(
    persist(
    (set) => ({
    answerArrived: true,

    updateAnswerArrivedState: (answerState:boolean) => {/* console.log("Updating arrive state to: ",answerState) */;set({ answerArrived: answerState})},

  }),{name:'answerArrived'}))  

export default useAnswerArrivedState