import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useUserData = create(
    persist(
    (set) => ({
    userName: "Joe",
    userGender:"Male",
    updateUserName: (newUserName:string) => {console.log("updating user's name to "+newUserName);set({ userName: newUserName })},
    updateUserGender: (newGender:string) => {console.log("updating user's gender to "+newGender);set({ userGender: newGender })}

  }),{name:'userData'}))  