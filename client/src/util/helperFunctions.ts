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
            element.style.backgroundColor = color
        }
    });
}

export {findCursorCoordinatesViaElement, colorElementsViaClasses}