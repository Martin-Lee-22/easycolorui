import ColorUX from "../../../components/colorUX";
import ColorUXFactory from "../../../components/colorUXFactory";
import "../../../scss/pages/sections/about.scss";
import { benefitsCardData, benefitsCardDataType } from "../../../data/components";
import BenefitsCard from "../../../components/cards/benefitsCard";
import { Fragment } from "react/jsx-runtime";

const About = () => {
  return (
    <ColorUX>
      <section className="about-section">
        <ColorUXFactory>
            <h1  className="about-h1">About us</h1>
            <p  className="about-p">
            Ever had trouble creating/deciding color palettes for your UX design?
            Well no more! feel free to create what every color palettes you want
            and test them live with a simple click of a button! If you also want
            to learn more about color combinations, please feel free to check out
            the courses below from our senior instructors.
            </p>
        </ColorUXFactory>
        <div className="about-div">
            {benefitsCardData.map((benefitsCard: benefitsCardDataType, index:number)=>{
                    return <Fragment key={index}><BenefitsCard data={benefitsCard} /></Fragment>
                })}
        </div>
      </section>
    </ColorUX>
  );
};

export default About;
