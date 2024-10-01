import { color } from "../types/colors"

/**
 * Given a React.MouseEvent and a React.RefObject pointing to an HTML element, this function will calculate the percentage of
 * the element's width and height that the mouse cursor is at when the event is triggered. The returned values are based on the top
 * left corner of the element as the origin (0,0) and the bottom right corner as (100,100). If the given refElement is null, the function
 * returns [0,0].
 * @param e The React.MouseEvent to find the coordinates from.
 * @param refElement The React.RefObject pointing to the HTML element to find the coordinates from.
 * @returns An array containing the percent from the left edge of the element and the percent from the top edge of the element.
 */
function findCursorCoordinatesViaElement(e:React.MouseEvent<HTMLElement, MouseEvent>, refElement: React.RefObject<HTMLElement>){
    if(refElement.current !== null){
        const element = refElement.current.getBoundingClientRect()
        const [top, left, width, height] = [element.top, element.left, element.width, element.height]
        const y = ((e.clientY - top) / height)  * 100
        const x = ((e.clientX - left) / width ) * 100
        return [x, y]
    }
    return [0, 0]
}

/**
 * Sets the background color of all HTML elements with the given class names to the given color.
 * @param classNames An array of class names to search for.
 * @param color The color to set as the background color of the elements.
 */
function colorElementsViaClasses(classNames:string[], color:string) {
    classNames.forEach((className) => {
        let elements = document.getElementsByClassName(className)
        for(let i = 0; i < elements.length; i++){
            let element = elements[i] as HTMLElement
            if(className === "benefits-card") console.log(color)
            element.style.backgroundColor = color
            element.style.backgroundImage = "none"
        }
    });
}

/**
 * Searches the given array of color objects for one with the given color, and returns it if found.
 * @param colors An array of color objects to search.
 * @param color The color to search for.
 * @returns The color object with the given color, or undefined if not found.
 */
function getColorObjectViaColor(colors: color[], color: string):color | undefined {
    let hexColor = rgbToHex(color)
    for(let colorObject of colors){
        if(colorObject.color === hexColor) {
            return colorObject
        }
    }
}


/**
 * Converts an rgb color string to a hex color string.
 * @param rgb The rgb color string to convert.
 * @returns The hex color string equivalent of the given rgb color string.
 */
function rgbToHex(rgb: string): string{
    let rgbValues = rgb.split(',')
    let r = parseInt(rgbValues[0].trim().split('(')[1], 10).toString(16)
    let g = parseInt(rgbValues[1].trim(), 10).toString(16)
    let b = parseInt(rgbValues[2].trim().split(')')[0], 10).toString(16)
    r = r.length === 1 ? '0' + r : r
    g = g.length === 1 ? '0' + g : g
    b = b.length === 1 ? '0' + b : b
    return `#${r}${g}${b}`
}

export {findCursorCoordinatesViaElement, colorElementsViaClasses, getColorObjectViaColor}