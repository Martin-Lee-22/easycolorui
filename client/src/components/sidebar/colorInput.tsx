import '../../scss/components/sidebar/colorInput.scss'
import { color } from '../../types/colors'

const ColorInput = ({color, index}: {color:color, index:number}) => {
    return <input key={index} value={color.color}/>
}

export default ColorInput