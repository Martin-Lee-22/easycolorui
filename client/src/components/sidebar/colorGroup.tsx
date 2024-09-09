import { useContext } from 'react'
import '../../scss/components/sidebar/colorGroup.scss'
import ColorInput from './colorInput'
import ColorsContext from '../../context/colorsContextProvider'

const ColorGroup = () => {
    const {colors} = useContext(ColorsContext)

    return(
        <section className="color-group">
            <h3>Colors:</h3>
            {colors.map((color, index)=>{
                return <ColorInput color={color} index={index}/>
            })}
        </section>
    )
}

export default ColorGroup