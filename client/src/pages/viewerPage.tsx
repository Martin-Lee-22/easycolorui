import { memo } from 'react'
import '../scss/pages/viewerPage.scss'
import PriceCard from '../components/cards/priceCard'
import { accordionData, aiProfilesData, benefitsCardData, priceCardData, reviewData } from '../data/components'
import BenefitsCard from '../components/cards/benefitsCard'
import AiProfiles from '../components/cards/aiProfiles'
import Accordion from '../components/accordion'
import Review from '../components/cards/review'
import ContactForm from '../components/contactForm'
import WebPage from './webpage/webPage'

const ViewerPage = () => {
    return(
        <main className="viewer-page">
            {/* {priceCardData.map((data, index)=>{
                return (<Fragment key={index}><PriceCard data={data} key={index}/></Fragment>)
            })} */}
            {/* <PriceCard data={priceCardData[0]}/>
            <BenefitsCard data={benefitsCardData[0]}/>
            <AiProfiles data={aiProfilesData[0]}/>
            <Accordion data={accordionData[0]}/>
            <Review data={reviewData[0]}/>
            <ContactForm/> */}
            <WebPage/>
        </main>
    )
}

export default memo(ViewerPage)