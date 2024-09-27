import ColorUX from '../../../components/colorUX'
import ColorUXFactory from '../../../components/colorUXFactory'
import '../../../scss/pages/sections/introduction.scss'

const Introduction = () => {
    return(
        <ColorUX>
            <section className="introduction-section">
                <ColorUXFactory>
                    <div className='introduction-div'>
                        <ColorUXFactory>
                            <h1 className='introduction-h1'>EasyColorUX</h1>
                            <p className='introduction-p'>Transforms your artistic ideas into vibrant masterpieces with just a few clicks, making coloring effortless and fun for everyone!</p>
                            <button className='introduction-button'>
                                <ColorUX>
                                    <span className='introduction-span'>Sign Up Now</span>
                                </ColorUX>
                            </button>
                        </ColorUXFactory>
                    </div>
                    <div className='introduction-div-2'>🎨</div>
                </ColorUXFactory>
            </section>
        </ColorUX>
    )
}

export default Introduction