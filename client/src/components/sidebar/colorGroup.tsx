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
        setActiveColor({id:c.id, color:value, type:c.type, description:c.description, classes:c.classes})
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
            <div className='add-subtract-color-wrapper'>
                <button title='Add Color' className='add-color' onClick={()=>{setColors([...colors, {id:colors.length, color: '#FFFFFF', description: 'Extra color for your palette', type: `extra #${colors.length - 2}`, classes:[]}])}}><span>&#x2b;</span></button>
                {colors.length > 3 && <button title='Subtract Color' className='subtract-color' onClick={()=>{setColors([...colors.slice(0, -1)])}}><span>&#x2212;</span></button>}
            </div>
        </section>
    )
}

export default ColorGroup