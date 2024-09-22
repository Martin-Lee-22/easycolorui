import { Fragment } from "react/jsx-runtime"
import ColorUX from "../../../components/colorUX"
import { accordionData } from "../../../data/components"
import '../../../scss/pages/sections/questions.scss'
import Accordion from "../../../components/accordion"

const Questions = () => {
    return(
        <ColorUX>
            <section className="questions-section">
                <ColorUX>
                    <h1 className="questions-h1">Questions</h1>
                </ColorUX>
                <ColorUX>
                    <div className="questions-div">
                        {accordionData.map((data, index)=>{
                            return  <Fragment key={index}><Accordion data={data}/></Fragment>
                        })}
                    </div>
                </ColorUX>
            </section>
        </ColorUX>
    )
}

export default Questions