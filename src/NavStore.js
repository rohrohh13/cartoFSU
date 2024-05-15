import {create} from 'zustand'

export const useNavStore = create((set) => ({
  currentNav: '',
  setCurrentNav: (nav) => set(() => ({ currentNav: nav })),
  isDomSelected: false,
  setIsDomSelected: (is) => set(() => ({ isDomSelected: is}))
}))