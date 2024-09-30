import { useContext } from "react"
import ColorsContext from "../../context/colorsContextProvider"
import usePalettes from '../../hooks/usePalettes'
import '../../scss/components/sidebar/popularPalettes.scss'
import { color } from "../../types/colors"
import { colorElementsViaClasses } from "../../util/helperFunctions"

const PopularPalettes = () => {
    const {colors, setColors} = useContext(ColorsContext)
    const {palettes, createPalette} = usePalettes()

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

    function handleClick(colors:color[]) {
        setColors(colors)
        for(let color of colors){
            colorElementsViaClasses(color.classes, color.color)
        }   
    }

    return(
        <section>
            <h3>Popular Palettes:</h3>
            <button onClick={()=>createPalette({colors})}>Import</button>
            <div className="popular-palettes-wrapper">
                {palettes.map((palette, index) => {
                    return <div key={index} className="popular-palette" onClick={()=>{handleClick(palette.colors)}} style={{backgroundImage: createGradient(palette.colors, 'right')}}/>
                })}
            </div>
        </section>
    )
}

export default PopularPalettes