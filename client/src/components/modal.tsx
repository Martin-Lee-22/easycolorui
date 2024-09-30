import { useContext, useState } from "react"
import ColorsContext from "../context/colorsContextProvider"
import '../scss/components/modal.scss'

const Modal = ({refModal}:{refModal:React.MutableRefObject<HTMLDialogElement | null>}) => {
    const {colors} = useContext(ColorsContext)
    const [copied, setCopied] = useState<boolean>(false)
    return(
        <dialog ref={refModal} className="color-modal">
            <div className="color-modal-header">
                <h3>CSS</h3>
                <button onClick={()=>{refModal.current?.close(); setCopied(false)}}><span>&#x58;</span></button>
            </div>
            <div className="color-modal-body">
                <span>&#123;</span>
                {colors.map((color)=>{return <p key={color.type}>--{color.type}: {color.color};</p>})}
                <span>&#125;</span>
            </div>
            <button className="color-modal-copy-button" onClick={()=>{setCopied(true)}}>{copied ? <>Copied <span>&#x2705;</span></> : <>Copy <span>&#x1F4CB;</span></>}</button>
        </dialog>
    )
}

export default Modal