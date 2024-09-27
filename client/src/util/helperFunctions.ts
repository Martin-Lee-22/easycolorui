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

export {findCursorCoordinatesViaElement}