import { createContext } from "react"
import { color } from "../types/colors"

type colorsContext = {
    colors: color[],
    setColors: React.Dispatch<React.SetStateAction<color[]>>
    color: React.MutableRefObject<color | undefined>
}

const colorsContextState = {
    colors: [],
    setColors: () => {},
    color: {current:undefined}
}

const ColorsContext = createContext<colorsContext>(colorsContextState)

export default ColorsContext