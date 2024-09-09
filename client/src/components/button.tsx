import { useRef } from "react";
import useColors from "../hooks/useColors";
import { handleClick } from "../util/handleClick";

const Button = () => {
    const overlayElement = useRef<HTMLButtonElement>(null);
    const { colors, setColors } = useColors();
    return(
        <button className="overlay-element" ref={overlayElement} onClick={(e) => {handleClick(e, overlayElement, colors, setColors)}}>
            Button
            {colors.map((color, index)=>{
                return <div key={index} className="underlay-element" style={{left:`${color.x}`,top:`${color.y}`, backgroundColor:`${color.color}`, zIndex:`${index - colors.length}`}}/>
            })}
        </button>
    )
}

export default Button