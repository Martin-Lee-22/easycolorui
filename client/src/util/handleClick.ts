import { colorInput } from "../types/colorInput"
import { findCursorCoordinatesViaElement } from "./helperFunctions"

function handleClick(e: React.MouseEvent<HTMLElement, MouseEvent>, element: React.RefObject<HTMLElement>,state: colorInput[], callBack:React.Dispatch<React.SetStateAction<colorInput[]>>){
    if(element.current){
        let [x, y] = findCursorCoordinatesViaElement(e, element)
        callBack([...state, {color: '#32a852', x:x, y:y}])
    }
}

export {handleClick}