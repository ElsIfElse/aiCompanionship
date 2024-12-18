import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export const useUserData = create(
    persist(
    (set) => ({
    userName: "User",
    updateUserName: (newUserName:string) => {console.log("updating user's name to "+newUserName);set({ userName: newUserName })}
  }),{name:'userData'}))  