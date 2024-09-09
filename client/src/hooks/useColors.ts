import { useEffect, useState } from "react"
import { colorInput } from "../types/colorInput"

const useColors = () => {
    const [colors, setColors] = useState<colorInput[]>([])

    useEffect(()=>{
        let intervalId = setInterval(()=>{
            if(colors.length > 1){
                setColors(prevState => {
                    return prevState.filter((_, i) => i !== 0)
                  })
            } else {
                clearInterval(intervalId)
            }
        }, 500)
        return () => clearInterval(intervalId)
    },[colors])

    return{colors, setColors}
}

export default useColors