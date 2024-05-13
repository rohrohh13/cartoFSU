import {create} from 'zustand'

export const useNavStore = create((set) => ({
  currentNav: '',
  setCurrentNav: (nav) => set(() => ({ currentNav: nav })),
}))