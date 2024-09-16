import { memo } from 'react'
import '../scss/pages/viewerPage.scss'
import PriceCard from '../components/cards/priceCard'

const ViewerPage = () => {
    return(
        <main className="viewer-page">
            <PriceCard/>
        </main>
    )
}

export default memo(ViewerPage)