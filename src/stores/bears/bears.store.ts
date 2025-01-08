import { create } from 'zustand'

type Bears = {
  id: number
  name: string
}

interface BearsState {
  blackBears: number
  polarBears: number
  pandaBears: number
  bears: Bears[]

  computed: {
    totalBears: number
  }

  increaseBlackBears: (increaseBy: number) => void
  increasePolarBears: (increaseBy: number) => void
  increasePandaBears: (increaseBy: number) => void
  doNothing: () => void
  addBear: () => void
  clearBears: () => void
}

export const userBearsStore = create<BearsState>()((set, get) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 2,
  bears: [{id: 1, name: 'Oso #1'}], 

  computed: {
    get totalBears() {
      return get().blackBears + get().polarBears + get().pandaBears + get().bears.length
    }
  },

  increaseBlackBears: (increaseBy) => set((state) => ({ blackBears: state.blackBears +  increaseBy })),
  increasePolarBears: (increaseBy) => set((state) => ({ polarBears: state.polarBears +  increaseBy })),
  increasePandaBears: (increaseBy) => set((state) => ({ pandaBears: state.pandaBears +  increaseBy})),
  doNothing: () => set((state) => ({bears: [...state.bears]})),
  addBear: () => set((state) => ({
    bears: [...state.bears, {id: state.bears.length + 1, name: `Oso #${state.bears.length + 1}`}]
  })),
  clearBears: () => set({bears: []})
}))