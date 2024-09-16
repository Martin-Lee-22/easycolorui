import { createContext } from "react"
import { color } from "../types/colors"

type colorsContext = {
    colors: color[],
    setColors: React.Dispatch<React.SetStateAction<color[]>>
    activeColor: color | undefined,
    setActiveColor: React.Dispatch<React.SetStateAction<color|undefined>>
}

const colorsContextState = {
    colors: [],
    setColors: () => {},
    activeColor: undefined,
    setActiveColor: ()=>{}
}

const ColorsContext = createContext<colorsContext>(colorsContextState)

export default ColorsContext