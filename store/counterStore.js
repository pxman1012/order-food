'use client';

import { create } from 'zustand'

// export const defaultInitState = {
//     count: 0,
// }

// export const createCounterStore = (
//     initState = defaultInitState,
// ) => {
//     return createStore((set) => ({
//         ...initState,
        
//         decrementCount: () => set((state) => ({ count: state.count - 1 })),
        
//         incrementCount: () => set((state) => ({ count: state.count + 1 })),

//         reset: () => set({ count: 0 })
//     }))
// }

const useCounterStore = create((set) => ({
    count: 0,

    increase: () => set(state => ({ count: state.count + 1 })),

    decrease: () => set(state => ({ count: state.count - 1 })),

    reset: () => set({ count: 0 })
}))

export default useCounterStore