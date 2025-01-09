import { createJSONStorage, type StateStorage } from 'zustand/middleware';

const storageApi: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    return sessionStorage.getItem(name)
  },

  setItem: function (name: string, value: string): void {
    sessionStorage.setItem(name, value)
  },

  removeItem: function (name: string): void {
    console.log('removeItem',{name});
  }
}

export const customSessionStorage = createJSONStorage(() => storageApi)