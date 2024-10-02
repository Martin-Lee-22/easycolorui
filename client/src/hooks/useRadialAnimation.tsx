import { useEffect, useRef, useState } from "react"
import { findCursorCoordinatesViaElement } from "../util/helperFunctions"
import { easeInOutQuad} from "../util/animationFunctions"
import { color } from "../types/colors"

const useRadialAnimation = () => {
    const [xCoord, setXCoord] = useState<number>(0)
    const [yCoord, setYCoord] = useState<number>(0)
    const [radius, setRadius] = useState<number>(0)
    const [animate, setAnimate] = useState<boolean>(false)
    const progress = useRef(0)

    const maxRadiusSize = 100
    var time = 0
    const diff = 30
    const minTime = 0
    const maxTime = 1000

    useEffect(()=>{
        if(animate === true && radius < maxRadiusSize){
            for (var i = 0, len = diff; i <= len; i++) {
                var timeoutId = setTimeout(()=>{
                progress.current += 0.05
                setRadius(progress.current)
                }, time)
                time = easeInOutQuad(i, minTime, maxTime, diff);
            }
        } else {
            progress.current = 0
            setRadius(100)
            setAnimate(false)
        }
        return () => clearTimeout(timeoutId)
    }, [radius, animate])

    function createRadialGradient(colors: color[]){
        if(colors.length > 0){
            let newColor = colors[colors.length - 1].color
            let prevColor = 'transparent'
            if(colors.length > 1) prevColor = colors[colors.length - 2].color
            return `radial-gradient(circle at ${xCoord}% ${yCoord}%, ${newColor} ${radius}%, ${prevColor} 1%)`
        }
    }

    function startRadialAnimation(e:React.MouseEvent<HTMLElement, MouseEvent>, element: React.MutableRefObject<HTMLElement|null>){
        let [x, y] = findCursorCoordinatesViaElement(e, element)
        setAnimate(true)
        setRadius(0)
        setXCoord(x)
        setYCoord(y)
    }

    return {xCoord, yCoord, radius, startRadialAnimation, createRadialGradient}
}

export default useRadialAnimation