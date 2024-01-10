import rgbHex from 'rgb-hex'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface ColorState {
    currentColors: string[]
    savedColors: string[][]
    setColor: (colors: number[][]) => void
    saveColor: () => void,
    deleteColor: (colors: string[]) => void
}

export const useColors = create(
    persist<ColorState>(
        (set, get) => ({
            currentColors: [],
            savedColors: [],
            setColor: (colors) => {
                const hexColors = colors.map(color => "#" + rgbHex(color[0], color[1], color[2]))
        
                set((state) => ({ 
                    ...state,
                    currentColors: hexColors,
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
            saveColor: () => {
                // get color
                const { currentColors, savedColors } = get()
        
                // check if color is saved already
                let saved = false
                savedColors.map(colors => {
                    if(colors.includes(currentColors[0])){
                        saved = true
                    }
                })
        
                // if saved stop
                if(saved) return
        
        
                set((state) => ({
                    ...state,
                    savedColors: [...state.savedColors, currentColors]
                }))
            },
        }),
        {
            name: "colors",
            storage: createJSONStorage(() => localStorage)
        }
    )
)
