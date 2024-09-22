import ColorUX from "./colorUX"
import ColorUXFactory from "./colorUXFactory"
import '../scss/components/accordion.scss'

const Accordion = ({data}:{data:string}) => {
    return(
        <ColorUX>
            <div className="accordion">
                <ColorUXFactory>
                    <span className={`accordion-${data}-span`}>{data}</span>
                    <span className={`accordion-${data}-span-2`}>&#x276F;</span>
                </ColorUXFactory>
            </div>
        </ColorUX>
    )
}

export default Accordion