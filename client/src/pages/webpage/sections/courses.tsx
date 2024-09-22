import { Fragment } from "react/jsx-runtime"
import ColorUX from "../../../components/colorUX"
import { aiProfilesData } from "../../../data/components"
import '../../../scss/pages/sections/courses.scss'
import AiProfiles from "../../../components/cards/aiProfiles"
import ColorUXFactory from "../../../components/colorUXFactory"

const Courses = () => {
    return(
        <ColorUX>
            <section className="courses-section">
                <ColorUXFactory>
                    <h1 className="courses-h1">Courses</h1>
                    <hr className="courses-hr"/>
                    <div className="courses-div">
                        {aiProfilesData.map((aiProfile, index)=>{
                            return <Fragment key={index}><AiProfiles data={aiProfile}/></Fragment>
                        })}
                    </div>  
                </ColorUXFactory>
            </section>
        </ColorUX>
    )
}

export default Courses