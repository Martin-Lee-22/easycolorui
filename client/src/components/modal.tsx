import { useContext, useState } from "react"
import ColorsContext from "../context/colorsContextProvider"
import '../scss/components/modal.scss'

const Modal = ({refModal, isInView}:{refModal:React.MutableRefObject<HTMLDialogElement | null>, isInView:boolean}) => {
    const {colors} = useContext(ColorsContext)
    const [copied, setCopied] = useState<boolean>(false)

    function copyCss(){
        let text = ''
        for(let color of colors){
            text += `--${color.type}: ${color.color};\n`
        }
        navigator.clipboard.writeText(text)
    }
    function handleClick(){
        setCopied(true)
        copyCss()
    }

    return(
        <dialog ref={refModal} className="color-modal" style={{
            transform: isInView ? "none" : "translateY(25px)",
            opacity: isInView ? 1 : 0,
            transition: "all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
            <div className="color-modal-header">
                <h3>CSS</h3>
                <button onClick={()=>{refModal.current?.close(); setCopied(false)}}><span>&#x58;</span></button>
            </div>
            <div className="color-modal-body">
                <span>&#123;</span>
                {colors.map((color)=>{return <p key={color.type}>--{color.type}: {color.color};</p>})}
                <span>&#125;</span>
            </div>
            <button className="color-modal-copy-button" onClick={handleClick}>{copied ? <>Copied <span>&#x2705;</span></> : <>Copy <span>&#x1F4CB;</span></>}</button>
        </dialog>
    )
}

export default Modal