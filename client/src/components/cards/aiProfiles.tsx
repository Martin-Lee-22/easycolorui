import ColorUX from "../colorUX"
import ColorUXFactory from "../colorUXFactory"
import '../../scss/components/card.scss'
import { aiProfilesDataType } from "../../data/components"

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
            <div id="ai-profile">
                <img src="https://picsum.photos/250/200" alt="random ai"/>
                <div>
                    <ColorUXFactory>
                        {stars.map((_, index)=> {return <span key={index}>&#9733;</span>})}
                    </ColorUXFactory>
                    <ColorUX>
                        <span>Rated {data.stars} Stars</span>
                    </ColorUX>
                </div>
                <div>
                    <ColorUXFactory>
                        <img src='../../../public/user.png' alt="user"/>
                        <span>{data.userName}</span>
                    </ColorUXFactory>
                </div>
                <div>
                    <ColorUX>
                        <p>{data.description}</p>
                    </ColorUX>
                </div>
                <div>
                    <ColorUXFactory>
                    <span>&#9200;</span>
                    <h6>{data.duration.hours}h {data.duration.minutes}min</h6>
                    <span>&#128214;</span>
                    <h6>{data.lessons} Lessons</h6>
                    </ColorUXFactory>
                </div>
                <ColorUX>
                    <button>
                        <ColorUX>
                            <span>View Course</span>
                        </ColorUX>
                    </button>
                </ColorUX>
            </div>
        </ColorUX>
    )
}

export default AiProfiles