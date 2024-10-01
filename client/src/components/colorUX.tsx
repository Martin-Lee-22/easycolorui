import { cloneElement, useContext, useEffect, useRef, useState } from 'react'
import '../scss/components/colorUX.scss'
import useRadialAnimation from '../hooks/useRadialAnimation'
import { textElements } from '../data/elements'
import { color } from '../types/colors'
import ColorsContext from '../context/colorsContextProvider'
import { getColorObjectViaColor } from '../util/helperFunctions'
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

    /**
     * If the element has a background color, this function will remove the background color, and add the color to  colorHistory.
     * The active color is then added to the colorHistory as well.
     * If the element does not have a background color, only the active color will be added to the history.
     * @param element - The React RefObject of the element to check for a background color.
     * @param activeColor - The active color to add to the history.
     */
    function addExistingBgColorToHistory(element:React.MutableRefObject<HTMLElement | null>, activeColor:color) {
        if(element.current?.style.backgroundColor) {
            let foundColor = getColorObjectViaColor(colors, element.current.style.backgroundColor)
            if(foundColor !== undefined){
                element.current.style.backgroundColor = ''
                setColorHistory(([foundColor, activeColor]))
            }
        } else {
            setColorHistory(([...colorHistory, activeColor]))
        }
    }

    /**
     * Given a React RefObject pointing to an HTML element, this function will remove the element's class name from the
     * classes array of all colors, and then add the class name to the classes array of the color that matches the active color.
     * Then, it will update the colors state with the new colors array.
     * @param element - The React RefObject pointing to the HTML element to modify the classes array for.
     * @returns void
     */
    function modifyClassesForPalette(element:React.MutableRefObject<HTMLElement | null>){
        if(element?.current){
            let newColors = removeClasses(element.current.className, colors)
            // The foreach loop below will insert the new class name into the color's classes array
            newColors.forEach((color)=>{
                if(element.current !== null &&  color.type === activeColor.current?.type) color.classes.push(element.current.className)
            })
            setColors(newColors)
        }
    }

    function handleClick(e:React.MouseEvent<HTMLElement, MouseEvent>){
        e.stopPropagation()
        startRadialAnimation(e, element)
        if(element?.current && activeColor?.current) {
            addExistingBgColorToHistory(element, activeColor.current)
            // uncomment this if you want to create palettes
            modifyClassesForPalette(element)
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