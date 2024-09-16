import { useContext, useRef } from "react";
import useColors from "../hooks/useColors";
import { handleClick } from "../util/handleClick";
import ColorsContext from "../context/colorsContextProvider";

export default function Div() {
  const {color} = useContext(ColorsContext)
  const overlayElement = useRef<HTMLDivElement>(null);
  const { colors, setColors } = useColors();
  
  return (
    <div
      className="overlay-element"
      ref={overlayElement}
      onClick={(e) => {
        handleClick(e, overlayElement, color, colors, setColors);
      }}
    >
      {colors.map((color, index) => {
        return (
          <div
            key={index}
            className="underlay-element"
            style={{
              left: `${color.x}`,
              top: `${color.y}`,
              backgroundColor: `${color.color}`,
              zIndex: `${index - colors.length}`,
            }}
          />
        );
      })}
    </div>
  );
}
