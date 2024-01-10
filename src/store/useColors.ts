import rgbHex from 'rgb-hex'
import { create } from 'zustand'

interface ColorState {
    currentColors: string[]
    savedColors: string[][]
    setColor: (colors: number[][]) => void
    saveColor: () => void,
    deleteColor: (colors: string[]) => void
}

export const useColors = create<ColorState>((set, get) => ({
    currentColors: [],
    savedColors: [],
    setColor: (colors) => {
        const hexColors = colors.map(color => "#" + rgbHex(color[0], color[1], color[2]))

        set((state) => ({ 
            ...state,
            currentColors: hexColors,
        }))
    },
    saveColor: () => {
        const { currentColors } = get()

        set((state) => ({
            ...state,
            savedColors: [...state.savedColors, currentColors]
        }))
    },
    deleteColor: (colors) => {
        const { savedColors } = get()
        const updatedColors = savedColors.filter(color => !colors.includes(color[0]))

        set((state) => ({
            ...state,
            savedColors: updatedColors
        }))
    },
}))