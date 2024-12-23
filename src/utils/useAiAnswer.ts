import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { UseAiAnswerData } from './interfaces'

export const useAiAnswerData = create<UseAiAnswerData>()(
    persist(
    (set) => ({
    aiAnswer: "",
    updateAiAnswer: (newAnswer:string) => {set({ aiAnswer: newAnswer })}
  }),{name:'aiAnswerData'}))  