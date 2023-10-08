import { create } from 'zustand'

interface ModalState {
  shown: boolean
  hide: (value: boolean) => void
}

export const modalState = create<ModalState>((set) => ({
  shown: false,
  hide: (value: boolean) => {
    set((state) => ({
      shown: value,
    }))
  },
}))
