function findCursorCoordinatesViaElement(e:React.MouseEvent<HTMLElement, MouseEvent>, refElement: React.RefObject<HTMLElement>){
    if(refElement.current !== null){
        const element = refElement.current.getBoundingClientRect()
        const [top, left, bottom, right] = [element.top, element.left, element.bottom, element.right]
        const y = (e.clientY / (top + bottom))  * 100 + '%'
        const x = (e.clientX / (left + right) ) * 100 + '%'
        return [x, y]
    }
    return ['0%', '0%']
}

export {findCursorCoordinatesViaElement}