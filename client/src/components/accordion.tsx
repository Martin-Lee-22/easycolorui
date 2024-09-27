import ColorUX from "./colorUX"
import ColorUXFactory from "./colorUXFactory"
import '../scss/components/accordion.scss'
import { motion } from "framer-motion"
import { popUpAnimation } from "../data/animation"

const Accordion = ({data}:{data:string}) => {
    return(
        <ColorUX>
            <motion.div className="accordion" variants={popUpAnimation}>
                <ColorUXFactory>
                    <span className={`accordion-${data}-span`}>{data}</span>
                    <span className={`accordion-${data}-span-2`}>&#x276F;</span>
                </ColorUXFactory>
            </motion.div>
        </ColorUX>
    )
}

export default Accordion