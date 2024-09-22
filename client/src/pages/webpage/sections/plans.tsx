import { Fragment } from "react/jsx-runtime"
import PriceCard from "../../../components/cards/priceCard"
import ColorUX from "../../../components/colorUX"
import { priceCardData } from "../../../data/components"
import '../../../scss/pages/sections/plans.scss'
import ColorUXFactory from "../../../components/colorUXFactory"

const Plans = () => {
    return(
        <ColorUX>
            <section className="plans-section">
                <ColorUXFactory>
                    <h1 className="plans-h1">Plans</h1>
                    <hr className="plans-hr"/>
                    <div className="plans-div">
                        {priceCardData.map((priceCard, index)=>{
                            return <Fragment key={index}><PriceCard data={priceCard}/></Fragment>
                        })}
                    </div>
                </ColorUXFactory>
            </section>
        </ColorUX>
    )
}

export default Plans