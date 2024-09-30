import { useContext, useRef, useState } from 'react'
import '../../scss/components/sidebar/colorGroup.scss'
import ColorInput from './colorInput'
import ColorsContext from '../../context/colorsContextProvider'
import { color } from '../../types/colors'
import Modal from '../modal'

const ColorGroup = () => {
    const {setActiveColor, colors, setColors} = useContext(ColorsContext)
    const [activeIndex, setActiveIndex] = useState<number>()
    const modal = useRef<HTMLDialogElement | null>(null)
    const minColorsLength = 3

    const handleChange = (value:string, c:color) => {
        setColors(colors.map((color)=>{
            return color.type === c.type ? {...color, color: value} : color
        }))
        setActiveColor({color:value, type:c.type, description:c.description, classes:c.classes})
    }

    return(
        <section className="color-group">
            <div className='color-group-header'>
                <h3>Step 1: Pick Colors</h3>
                <button title='Copy' className='export-button' onClick={()=>{modal.current?.showModal()}}><span>&#x2912;</span></button>
                <Modal refModal={modal}/>
            </div>
            <form>
                {colors.map((color, index)=>{
                    return (<div key={index} className={'color-input-wrapper ' + (activeIndex === index && 'active-color')} onClick={()=>{setActiveColor(color); setActiveIndex(index)}}>
                                <ColorInput handleChange={handleChange} color={color} setActiveIndex={()=>setActiveIndex(index)}/>
                            </div>)
                })}
            </form>
            <div className='add-subtract-color-wrapper'>
                <button title='Add Color' className='add-color' onClick={()=>{setColors([...colors, {color: '#FFFFFF', description: 'Extra color for your palette', type: `extra #${colors.length - 2}`, classes:[]}])}}><span>&#x2b;</span></button>
                {colors.length > minColorsLength && <button title='Subtract Color' className='subtract-color' onClick={()=>{setColors([...colors.slice(0, -1)])}}><span>&#x2212;</span></button>}
            </div>
        </section>
    )
}

export default ColorGroup