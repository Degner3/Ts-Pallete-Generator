import rgbHex from 'rgb-hex'
import { create } from 'zustand'

interface ColorState {
    currentColors: string[]
    savedColors: string[][]
    setColor: (colors: number[][]) => void
}

export const useColors = create<ColorState>((set) => ({
    currentColors: [],
    savedColors: [],
    setColor: (colors) => {
        const hexColors = colors.map(color => "#" + rgbHex(color[0], color[1], color[2]))

        set((state) => ({ 
            ...state,
            currentColors: hexColors,
        }))
    },
}))