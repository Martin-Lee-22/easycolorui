import { benefitsCardDataType } from "../../data/components"
import ColorUX from "../colorUX"
import ColorUXFactory from "../colorUXFactory"
import '../../scss/components/card.scss'

const BenefitsCard = ({data}:{data:benefitsCardDataType}) => {
    return(
        <ColorUX>
            <div className="benefits-card">
                <ColorUXFactory>
                    <span className={`benefits-card-${data.heading}-span`}>&#x2606;</span>
                    <h2 className={`benefits-card-${data.heading}-h2`}>{data.heading}</h2>
                    <hr className={`benefits-card-${data.heading}-hr`}/>
                    <p className={`benefits-card-${data.heading}-p`}>{data.description}</p>
                </ColorUXFactory>
            </div>
        </ColorUX>
    )
}

export default BenefitsCard