import { reviewDataType } from "../../data/components"
import ColorUX from "../colorUX"
import ColorUXFactory from "../colorUXFactory"
import '../../scss/components/card.scss'

const Review = ({data}:{data:reviewDataType}) => {
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
            <div className="review">
                <ColorUXFactory>
                <div className={`review-${data.userName}-div`}>
                    <ColorUXFactory>
                        <img src={data.imgSrc} alt="user"/>
                        <span className={`review-${data.userName}-span`}>{data.userName}</span>
                    </ColorUXFactory>
                </div>
                <hr className={`review-${data.userName}-hr`}/>
                <div>
                    <ColorUXFactory>
                        {stars.map((_, index)=> {return <span key={index}  className={`review-${data.userName}-span-${index}`}>&#9733;</span>})}
                    </ColorUXFactory>
                </div>
                <p className={`review-${data.userName}-p`}>{data.review}</p>
                </ColorUXFactory>
            </div>
        </ColorUX>
    )
}

export default Review