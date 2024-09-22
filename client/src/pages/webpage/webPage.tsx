import '../../scss/pages/webPage.scss'
import About from './sections/about'
import Contact from './sections/contact'
import Courses from './sections/courses'
import Footer from './sections/footer'
import Introduction from './sections/introduction'
import Plans from './sections/plans'
import Questions from './sections/questions'
import Reviews from './sections/reviews'

const WebPage = () => {
    return(
        <div className="web-page">
            <Introduction/>
            <About/>
            <Reviews/>
            <Courses/>
            <Plans/>
            <Questions/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default WebPage