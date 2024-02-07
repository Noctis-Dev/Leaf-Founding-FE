import { create } from "zustand";

export const useAccountStore = create((set) => ({
    account: null,
    setAccount: (account) => set({ account }),
}));