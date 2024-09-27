// import { useContext } from "react"
// import ColorsContext from "../../context/colorsContextProvider"
import '../../scss/components/sidebar/popularPalettes.scss'
// import { color } from "../../types/colors"

const PopularPalettes = () => {
    // const {colors} = useContext(ColorsContext)

    // function createGradient(colors: color[], direction: string){
    //     let percentage = (1 / colors.length) * 100
    //     let style = `linear-gradient(to ${direction},`
    //     for(let i = 0; i < colors.length; i++){
    //         if(i !== colors.length - 1){
    //             style += `${colors[i].color} ${percentage * i}% ${percentage * (i + 1)}%,`
    //         } else {
    //             style += `${colors[i].color} ${percentage * i}% ${percentage * (i + 1)}%)`
    //         }
    //     }
    //     return style
    // }

    return(
        <section>
            {/* <h3>Popular Palettes:</h3>
            <div className="popular-palettes-wrapper">
                {colors.map((color, index) => {
                    return <div key={index} className="popular-palette" style={{backgroundImage: createGradient(colors, 'right')}}/>
                })}
            </div> */}
        </section>
    )
}

export default PopularPalettes