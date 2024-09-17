import { benefitsCardDataType } from "../../data/components"
import ColorUX from "../colorUX"
import ColorUXFactory from "../colorUXFactory"
import '../../scss/components/card.scss'

const BenefitsCard = ({data}:{data:benefitsCardDataType}) => {
    return(
        <ColorUX>
            <div id="benefits-card">
                <ColorUXFactory>
                    <span>&#x2606;</span>
                    <h2>{data.heading}</h2>
                    <hr/>
                    <h5>{data.description}</h5>
                </ColorUXFactory>
            </div>
        </ColorUX>
    )
}

export default BenefitsCard