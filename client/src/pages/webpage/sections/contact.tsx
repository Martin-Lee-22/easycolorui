import ColorUX from "../../../components/colorUX"
import ColorUXFactory from "../../../components/colorUXFactory"
import ContactForm from "../../../components/contactForm"
import '../../../scss/pages/sections/contact.scss'

const Contact = () => {
    return(
        <ColorUX>
            <section className="contact-section">
                <ColorUXFactory>
                    <h1 className="contact-h1">Got Questions?</h1>
                    <p className="contact-p">Fill out this contact form and we'll get in touch with you ASAP!</p>
                </ColorUXFactory>
                <ContactForm/>
            </section>
        </ColorUX>
    )
}

export default Contact