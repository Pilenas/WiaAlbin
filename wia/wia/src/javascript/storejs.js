import { create } from 'zustand';

export const useStore = create((set) => ({
    cart: [],
    counts: {},
    tickets: [],

    setCounts: (counts) => set({ counts }),

}));

