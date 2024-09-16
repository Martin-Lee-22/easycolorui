import { cloneElement, useContext, useEffect, useRef, useState } from 'react'
import '../scss/components/colorUX.scss'
import useRadialAnimation from '../hooks/useRadialAnimation'
import { textElements } from '../data/elements'
import { color } from '../types/colors'
import ColorsContext from '../context/colorsContextProvider'

const ColorUX = ({children}: {children: JSX.Element}) => { 
    const {activeColor} = useContext(ColorsContext)
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
        if(activeColor !== undefined) setColorHistory(([...colorHistory, activeColor]))
    }

    const colorUXProps = {
        className:  (textElements.includes(children.type) &&  'text-ui'), // Check to see if child element is a text element.
        ref: element,
        onClick: (e:React.MouseEvent<HTMLElement, MouseEvent>)=> handleClick(e),
        style: {backgroundImage: createRadialGradient(colorHistory)}
    }

    return cloneElement(children, colorUXProps)
}

export default ColorUX