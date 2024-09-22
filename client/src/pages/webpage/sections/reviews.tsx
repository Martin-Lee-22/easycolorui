import { Fragment } from "react/jsx-runtime"
import ColorUX from "../../../components/colorUX"
import ColorUXFactory from "../../../components/colorUXFactory"
import { reviewData } from "../../../data/components"
import Review from "../../../components/cards/review"
import '../../../scss/pages/sections/reviews.scss'

const Reviews = () => {
    return(
        <ColorUX>
            <section className="reviews-section">
                <ColorUXFactory>
                <h1 className="reviews-h1">Reviews</h1>
                <div className="reviews-div">
                    {reviewData.map((review, index)=>{
                        return <Fragment key={index}><Review data={review}/></Fragment>
                    })}
                </div>
                </ColorUXFactory>
            </section>
        </ColorUX>
    )
}

export default Reviews