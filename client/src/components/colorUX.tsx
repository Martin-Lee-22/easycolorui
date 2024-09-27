import { cloneElement, useContext, useEffect, useRef, useState } from 'react'
import '../scss/components/colorUX.scss'
import useRadialAnimation from '../hooks/useRadialAnimation'
import { textElements } from '../data/elements'
import { color } from '../types/colors'
import ColorsContext from '../context/colorsContextProvider'

/**
 * Searches and removes the class name from other colors' classes array.
 * @param className - The name of the class to remove.
 * @param colors - The colors array.
 * @returns A new array with the the class name removed.
 */
const removeClasses = (className:string, colors:color[]):color[] => {
    const newColors = colors.map((color)=>{
        
         //If the class is found in the color's classes array, remove it
        if(color.classes.indexOf(className) !== -1) {
            let index = color.classes.indexOf(className)
            color.classes.splice(index, 1)
            return color
        } else {
            return color
        }
    })
    return newColors
}
const ColorUX = ({children}: {children: JSX.Element}) => { 
    const {activeColor, colors, setColors} = useContext(ColorsContext)
    const element = useRef<HTMLElement | null>(null)
    const [colorHistory, setColorHistory] = useState<color[]>([])
    const {startRadialAnimation, createRadialGradient} = useRadialAnimation()
    const maxHistoryLength = 2

    useEffect(()=>{
        if(colorHistory.length > maxHistoryLength) {
            colorHistory.shift()
            setColorHistory(colorHistory)
        }
    },[colorHistory])

    function handleClick(e:React.MouseEvent<HTMLElement, MouseEvent>){
        e.stopPropagation()
        startRadialAnimation(e, element)
        if(element.current !== null && activeColor !== undefined) {
            setColorHistory(([...colorHistory, activeColor]))
            let newColors = removeClasses(element.current.className, colors)
            newColors[activeColor.id].classes.push(element.current.className)
            setColors(newColors)
        }
    }

    const colorUXProps = {
        className: children.props.className + (textElements.includes(children.type) ?  ' text-ui' : ''), // Check to see if child element is a text element.
        ref: element,
        onClick: (e:React.MouseEvent<HTMLElement, MouseEvent>)=> handleClick(e),
        style: {backgroundImage: createRadialGradient(colorHistory)}
    }

    return cloneElement(children, colorUXProps)
}

export default ColorUX