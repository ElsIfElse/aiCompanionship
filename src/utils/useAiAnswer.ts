import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useAiAnswerData = create(
    persist(
    (set) => ({
    aiAnswer: "",
    updateAiAnswer: (newAnswer:string) => {set({ aiAnswer: newAnswer })}
  }),{name:'aiAnswerData'}))  