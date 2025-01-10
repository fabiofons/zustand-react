import { create, type StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
// import { customSessionStorage } from '../storages/session.storage';
import { firebaseStorage } from '../storages/firebase.storage';
// import { logger } from '../middlewares/logger.middleware';


interface PersonState {
  firstName: string
  lastName: string
}

interface Actions {
  setFirstName: (firstName: string) => void
  setLastName: (lastName: string) => void
}

const storeApi: StateCreator<PersonState & Actions, [["zustand/devtools", never]]> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (firstName) => set(({ firstName }), false, 'setFirstName'),
  setLastName: (lastName) => set(({ lastName }), false, 'setLastName')
})

export const usePersonStore = create<PersonState & Actions>()(
//  logger(
    devtools(
      persist(storeApi, {
        name: 'personStore',
        // storage: customSessionStorage
        storage: firebaseStorage
      })
    )
  // )
)