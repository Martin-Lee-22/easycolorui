import { benefitsCardDataType } from "../../data/components"
import ColorUX from "../colorUX"
import ColorUXFactory from "../colorUXFactory"
import '../../scss/components/card.scss'
import {motion} from 'framer-motion'
import { popUpAnimation } from "../../data/animation";

const BenefitsCard = ({data}:{data:benefitsCardDataType}) => {
    return(
        <ColorUX>
            <motion.div className="benefits-card" variants={popUpAnimation}>
                <ColorUXFactory>
                    <span className={`benefits-card-${data.heading}-span`}>&#x2606;</span>
                    <h2 className={`benefits-card-${data.heading}-h2`}>{data.heading}</h2>
                    <hr className={`benefits-card-${data.heading}-hr`}/>
                    <p className={`benefits-card-${data.heading}-p`}>{data.description}</p>
                </ColorUXFactory>
            </motion.div>
        </ColorUX>
    )
}

export default BenefitsCard