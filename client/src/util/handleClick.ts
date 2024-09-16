import { colorInput } from "../types/colorInput"
import { color } from "../types/colors"
import { findCursorCoordinatesViaElement } from "./helperFunctions"

function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>, element: React.RefObject<HTMLElement>, color:color|undefined, state: colorInput[], callBack:React.Dispatch<React.SetStateAction<colorInput[]>>){
    if(element.current && color !== undefined){
        let [x, y] = findCursorCoordinatesViaElement(e, element)
        callBack([...state, {color: color.color, x:x, y:y}])
    }
}

export {handleClick}