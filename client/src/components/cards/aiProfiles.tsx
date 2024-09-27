import ColorUX from "../colorUX"
import ColorUXFactory from "../colorUXFactory"
import '../../scss/components/card.scss'
import { aiProfilesDataType } from "../../data/components"
import {motion} from 'framer-motion'
import { popUpAnimation } from "../../data/animation";

const AiProfiles = ({data}: {data:aiProfilesDataType}) => {
    const stars = createStars(data.stars)

    function createStars(amount: number): number[]{
        let stars = []
        for(let i = 0; i < amount; i++){
            stars.push(i)
        }
        return stars
    }
    
    return(
        <ColorUX>
            <motion.div className="ai-profile" variants={popUpAnimation}>
                <img src={data.aiImgSrc} alt="random ai"/>
                <div className={`ai-profile-${data.userName}-div`}>
                    <ColorUXFactory>
                        {stars.map((_, index)=> {return <span key={index} className={`ai-profile-${data.userName}-star-${index}`}>&#9733;</span>})}
                    </ColorUXFactory>
                    <ColorUX>
                        <span className={`ai-profile-${data.userName}-number-stars`}>Rated {data.stars} Stars</span>
                    </ColorUX>
                </div>
                <div className={`ai-profile-${data.userName}-div-2`}>
                    <ColorUXFactory>
                        <img src={data.imgSrc} alt="user"/>
                        <span className={`ai-profile-${data.userName}-user-name`}>{data.userName}</span>
                    </ColorUXFactory>
                </div>
                <div className={`ai-profile-${data.userName}-div-3`}>
                    <ColorUX>
                        <p className={`ai-profile-${data.userName}-description`}>{data.description}</p>
                    </ColorUX>
                </div>
                <div className={`ai-profile-${data.userName}-div-4`}>
                    <ColorUXFactory>
                    <span className={`ai-profile-${data.userName}-clock`}>&#9200;</span>
                    <h6 className={`ai-profile-${data.userName}-time`}>{data.duration.hours}h {data.duration.minutes}min</h6>
                    <span className={`ai-profile-${data.userName}-book`}>&#128214;</span>
                    <h6 className={`ai-profile-number-${data.userName}-lessons`}>{data.lessons} Lessons</h6>
                    </ColorUXFactory>
                </div>
                <ColorUX>
                    <button className={`ai-profile-${data.userName}-button`}>
                        <ColorUXFactory>
                            <span className={`ai-profile-${data.userName}-button-text`}>View Course</span>
                            <span className={`ai-profile-${data.userName}-arrow`}>&#x279D;</span>
                        </ColorUXFactory>
                    </button>
                </ColorUX>
            </motion.div>
        </ColorUX>
    )
}

export default AiProfiles