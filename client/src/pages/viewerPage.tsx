import { memo } from 'react'
import Button from '../components/button'
import ColorUX from '../components/colorUX'
import '../scss/pages/viewerPage.scss'

const ViewerPage = () => {
    return(
        <main className="viewer-page">
            <Button text='Button'/>
            <ColorUX>
                <h1>Hello</h1>
            </ColorUX>
        </main>
    )
}

export default memo(ViewerPage)