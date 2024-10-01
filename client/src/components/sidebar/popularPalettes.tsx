import { useContext, useState } from "react"
import ColorsContext from "../../context/colorsContextProvider"
import usePalettes from '../../hooks/usePalettes'
import '../../scss/components/sidebar/popularPalettes.scss'
import { color } from "../../types/colors"
import { colorElementsViaClasses } from "../../util/helperFunctions"
import Loader from "../loader"

const PopularPalettes = () => {
    const {setColors} = useContext(ColorsContext)
    const [activeIndex, setActiveIndex] = useState<number>()
    const {palettes} = usePalettes()
    
    /**
     * Creates a CSS gradient string given an array of colors and a direction.
     * @param colors An array of color objects.
     * @param direction The direction of the gradient as a string. e.g. 'to right' or '45deg'.
     * @returns A CSS gradient string.
     */
    function createGradient(colors: color[], direction: string){
        let percentage = (1 / colors.length) * 100
        let style = `linear-gradient(to ${direction},`
        for(let i = 0; i < colors.length; i++){
            if(i !== colors.length - 1){
                style += `${colors[i].color} ${percentage * i}% ${percentage * (i + 1)}%,`
            } else {
                style += `${colors[i].color} ${percentage * i}% ${percentage * (i + 1)}%)`
            }
        }
        return style
    }

    function handleClick(paletteColors:color[], index: number){
        for(let paletteColor of paletteColors){
            colorElementsViaClasses(paletteColor.classes, paletteColor.color)
        }   
        setColors(paletteColors)
        setActiveIndex(index)
    }

    return(
        <section>
            <h3>Popular Palettes:</h3>
            <div className="popular-palettes-wrapper">
                {palettes.length === 0 ? <Loader/> :
                palettes.map((palette, index) => {
                    return <div key={index} className={'popular-palette ' + (activeIndex === index && 'active')} onClick={()=>{handleClick(palette.colors, index)}} style={{backgroundImage: createGradient(palette.colors, 'right')}}/>
                })}
            </div>
        </section>
    )
}

export default PopularPalettes