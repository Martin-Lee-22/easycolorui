import { Children } from "react"
import ColorUX from "./colorUX"

const ColorUXFactory = ({children}: {children: JSX.Element[]}) => {
    return(
        <>   
            {Children.map(children, child =>
                <ColorUX>
                    {child}
                </ColorUX>
            )}
        </>

    )
}

export default ColorUXFactory