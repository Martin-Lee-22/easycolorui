import { Fragment, memo } from 'react'
import '../scss/pages/viewerPage.scss'
import PriceCard from '../components/cards/priceCard'
import { aiProfilesData, benefitsCardData, priceCardData } from '../data/components'
import BenefitsCard from '../components/cards/benefitsCard'
import AiProfiles from '../components/cards/aiProfiles'

const ViewerPage = () => {
    return(
        <main className="viewer-page">
            {/* {priceCardData.map((data, index)=>{
                return (<Fragment key={index}><PriceCard data={data} key={index}/></Fragment>)
            })} */}
            <PriceCard data={priceCardData[0]}/>
            <BenefitsCard data={benefitsCardData[0]}/>
            <AiProfiles data={aiProfilesData[0]}/>
        </main>
    )
}

export default memo(ViewerPage)