import { useContext, useState } from 'react'
import '../../scss/components/sidebar/colorGroup.scss'
import ColorInput from './colorInput'
import ColorsContext from '../../context/colorsContextProvider'
import { color } from '../../types/colors'

const ColorGroup = () => {
    const {setActiveColor, colors, setColors} = useContext(ColorsContext)
    const [activeIndex, setActiveIndex] = useState<number>()

    const handleChange = (value:string, c:color) => {
        setColors(colors.map((color)=>{
            return color.type === c.type ? {...color, color: value} : color
        }))
        setActiveColor({color:value, type:c.type, description:c.description})
    }

    return(
        <section className="color-group">
            <div>
            <h3>Step 1:</h3><h4>Pick Colors</h4>
            </div>
            <form>
                {colors.map((color, index)=>{
                    return (<div key={index} className={'color-input-wrapper ' + (activeIndex === index && 'active-color')} onClick={()=>{setActiveColor(color); setActiveIndex(index)}}>
                                <ColorInput handleChange={handleChange} color={color} setActiveIndex={()=>setActiveIndex(index)}/>
                            </div>)
                })}
            </form>
        </section>
    )
}

export default ColorGroup