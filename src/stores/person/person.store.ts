import { create, type StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { customSessionStorage } from '../storages/session-storage';


interface PersonState {
  firstName: string
  lastName: string
}

interface Actions {
  setFirstName: (firstName: string) => void
  setLastName: (lastName: string) => void
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (firstName) => set(state => ({ firstName })),
  setLastName: (lastName) => set(state => ({ lastName }))
})

export const usePersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
  name: 'personStore',
  storage: customSessionStorage
}))