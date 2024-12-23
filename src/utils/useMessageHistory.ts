import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { MessageHistoryInterface } from './interfaces'; 


export const useMessageHistory = create<MessageHistoryInterface>()(
    persist(
    (set, get) => ({
        messageHistory: [],

        updateMessageHistory: async (newMessage: string) => {
            const {messageHistory} = get();
            console.log("Message history: ", messageHistory);
            return new Promise<void>((resolve) => {
                set({ messageHistory: [...messageHistory, newMessage] });
                resolve();
            });
        },

        deleteMessageHistory: async () => {
            return new Promise<void>((resolve) => {
                set({ messageHistory: [] });
                resolve();
            });
        },

    }), {name: 'messageHistory'}))

export default useMessageHistory