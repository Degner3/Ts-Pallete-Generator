import rgbHex from 'rgb-hex'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'

interface ColorState {
    currentColors: string[]
    activeColor: string[]
    savedColors: string[][]
    setColor: (colors: string[]) => void
    setActive: (colors: string[]) => void
    saveColor: () => void,
    deleteColor: (colors: string[]) => void
    deleteAllColors: () => void
}

export const useColors = create(
    persist<ColorState>(
        (set, get) => ({
            currentColors: [],
            savedColors: [],
            activeColor: [],
            setActive: (colors) =>  {
                set((state) => ({
                    ...state,
                    activeColor: colors
                }))
            },
            setColor: (colors) => {
                
        
                set((state) => ({ 
                    ...state,
                    currentColors: colors,
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
            deleteAllColors: () => {
                set({ savedColors: [] });
              },
        }),
        {
            name: "colors",
            storage: createJSONStorage(() => localStorage)
        }
    )
)
