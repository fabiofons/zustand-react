import { create, type StateCreator } from 'zustand';
import { createJSONStorage, persist,type StateStorage } from 'zustand/middleware';


interface PersonState {
  firstName: string
  lastName: string
}

interface Actions {
  setFirstName: (firstName: string) => void
  setLastName: (lastName: string) => void
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: 'Fabio',
  lastName: 'Fonseca',
  setFirstName: (firstName) => set({ firstName }),
  setLastName: (lastName) => set({ lastName })
})

const sessionStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    console.log('getItem', {name});
    return null
  },

  setItem: function (name: string, value: string): unknown | Promise<unknown> {
   console.log('setItem', {name, value});
  },

  removeItem: function (name: string): unknown | Promise<unknown> {
    console.log('removeItem',{name});
  }
}
export const usePersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
  name: 'personStore',
  storage: createJSONStorage(() =>sessionStorage)
}))