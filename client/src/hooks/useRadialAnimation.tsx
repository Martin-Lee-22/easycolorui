import { useEffect, useRef, useState } from "react"
import { findCursorCoordinatesViaElement } from "../util/helperFunctions"
import { easeInSine} from "../util/animationFunctions"
import { color } from "../types/colors"

const useRadialAnimation = () => {
    const [xCoord, setXcoord] = useState<string>('')
    const [yCoord, setYcoord] = useState<string>('')
    const [radius, setRadius] = useState<number>(0)
    const [animate, setAnimate] = useState<boolean>(false)

    const progress = useRef(0)
    const delay = 1
    const maxRadiusSize = 100

    useEffect(()=>{
        if(animate && radius < maxRadiusSize){
            var timeoutId = setTimeout(()=>{
                progress.current += 0.020
                let easeValue = easeInSine(progress.current) * 100
                setRadius(easeValue)
            }, delay)

        } else {
            progress.current = 0
            setAnimate(false)
        }
        return () => clearTimeout(timeoutId)
    }, [radius, animate])

    function createRadialGradient(colors: color[]){
        if(colors.length > 0){
            let newColor = colors[colors.length - 1].color
            let prevColor = 'transparent'
            if(colors.length > 1) prevColor = colors[colors.length - 2].color
            return `radial-gradient(circle at ${xCoord} ${yCoord}, ${newColor} ${radius}%, ${prevColor} 1%)`
        }
    }

    function startRadialAnimation(e:React.MouseEvent<HTMLElement, MouseEvent>, element: React.MutableRefObject<HTMLElement|null>){
        let [x, y] = findCursorCoordinatesViaElement(e, element)
        setAnimate(true)
        setRadius(0)
        setXcoord(x)
        setYcoord(y)
    }

    return {xCoord, yCoord, radius, startRadialAnimation, createRadialGradient}
}

export default useRadialAnimation