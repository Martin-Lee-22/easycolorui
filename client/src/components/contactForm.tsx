import ColorUX from "./colorUX"
import '../scss/components/contactForm.scss'
import ColorUXFactory from "./colorUXFactory"
import {motion} from 'framer-motion'
import { popUpAnimation } from "../data/animation";

const ContactForm = () => {
    return(
        <ColorUX>
            <motion.div className="contact-form-container" variants={popUpAnimation}>
                <ColorUXFactory>
                    <h2 className="contact-form-h2">Message Us!</h2>
                    <p className="contact-form-p">Feel free to fill up the form and our team will get back to you within 24 hours.</p>
                    <form className="contact-form">
                        <ColorUXFactory>
                            <label className="contact-form-label">Name</label>
                            <input id="name" type="text" autoComplete="off" className="contact-form-input"/>
                            <label className="contact-form-label-2">Email</label>
                            <input id="email" type="text" autoComplete="off" className="contact-form-input-2"/>
                            <label className="contact-form-label-3">Message</label>
                            <textarea id="message" className="contact-form-textarea"/>
                            <input type="button" value='Send Message' className="contact-form-input-3"/>
                        </ColorUXFactory>
                    </form>
                </ColorUXFactory>
            </motion.div>
        </ColorUX>
    )
}

export default ContactForm