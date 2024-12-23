import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { UseUserDataInterface } from './interfaces'

export const useUserData = create<UseUserDataInterface>()(
    persist(
    (set) => ({
    userName: "John",
    userGender:"Male",
    userHobby:"",
    setting:"Texting",
    userMessage:"",

    updateUserName: (newUserName:string) => {console.log("updating user's name to "+newUserName);set({ userName: newUserName })},
    updateUserGender: (newGender:string) => {console.log("updating user's gender to "+newGender);set({ userGender: newGender })},
    updateHobby: (newHobby:string) => {console.log("updating user's hobby to "+newHobby);set({ userHobby: newHobby })},
    updateSetting: (newSetting:string) => {console.log("updating user's setting to "+newSetting);set({ setting: newSetting })},
    updateUserMessage : (newMessage:string) => {/* console.log("updating user's message to "+newMessage) */;set({ userMessage: newMessage })},

  }),{name:'userData'}))  
