import { color } from '../../types/colors'

const ColorInput = ({color, handleChange, setActiveIndex}: {color:color, handleChange:(e: string, c:color) => void, setActiveIndex:React.Dispatch<React.SetStateAction<number | undefined>>}) => {
    const inputLength = 7
    return (
        <>
            <span title={color.description}>&#9432;</span>
            <label htmlFor={color.type} onClick={(e)=>{e.preventDefault()}}>{color.type}</label>
            <div>
                <input name={color.type} id={color.type} type='color' onChange={(e) => handleChange(e.target.value, color)} onClick={()=>{setActiveIndex}} value={color.color}/>
                <input type='text' name={color.type} id={color.type} minLength={inputLength} maxLength={inputLength} onChange={(e) => handleChange(e.target.value, color)} onClick={()=>{setActiveIndex}} value={color.color}/>
            </div>
        </>
    )
}

export default ColorInput