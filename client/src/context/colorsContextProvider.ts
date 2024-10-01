import { createContext } from "react"
import { color } from "../types/colors"

type colorsContext = {
    colors: color[],
    setColors: React.Dispatch<React.SetStateAction<color[]>>
    activeColor: React.MutableRefObject<color|undefined>,
}

const colorsContextState = {
    colors: [],
    setColors: () => {},
    activeColor: {current: undefined},
}

const ColorsContext = createContext<colorsContext>(colorsContextState)

export default ColorsContext