import ColorUX from "../../../components/colorUX"
import ColorUXFactory from "../../../components/colorUXFactory"
import { footerData } from "../../../data/components"
import '../../../scss/pages/sections/footer.scss'

const Footer = () => {
    return(
        <ColorUX>
            <section className="footer-section">
                <ColorUX>
                    <div className="footer-emoji">🎨</div>
                </ColorUX>
                <ColorUXFactory>
                    {footerData.map((data, index)=>{
                        return(
                            <div key={index} className={`footer-div-${data.heading}-${index}`}>
                                <ColorUXFactory>
                                <h4 className={`footer-h4-${data.heading}-${index}`}>{data.heading}</h4>
                                <ul className={`footer-ul-${data.heading}-${index}`}>
                                    <ColorUXFactory>
                                    {data.links.map((link, i)=>{
                                        return <li key={i} className={`footer-li-${data.heading}-${i}`}>{link}</li>
                                    })}
                                    </ColorUXFactory>
                                </ul>
                                </ColorUXFactory>
                            </div>
                        )
                    })}
                </ColorUXFactory>
            </section>
        </ColorUX>
    )
}

export default Footer