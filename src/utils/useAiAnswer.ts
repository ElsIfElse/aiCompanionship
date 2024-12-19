import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useAiAnswerData = create(
    persist(
    (set) => ({
    aiAnswer: "",
    updateAiAnswer: (newAnswer:string) => {console.log("updating ai answer to "+newAnswer);set({ aiAnswer: newAnswer })}
  }),{name:'aiAnswerData'}))  