import ColorUX from "../colorUX";
import "../../scss/components/card.scss";
import ColorUXFactory from "../colorUXFactory";
import { priceCardDataType } from "../../data/components";

const PriceCard = ({data}:{data:priceCardDataType}) => {
  return (
    <ColorUX>
      <div className={`price-card`}>
        <ColorUX>
            <div className={`price-card-${data.type}-div`}>
                <ColorUXFactory>
                    <h3 className={`price-card-${data.type}-h3`}>{data.type}</h3>
                    <h1 className={`price-card-${data.type}-h1`}>{data.price}</h1>
                    <hr className={`price-card-${data.type}-hr`}/>
                    <ul className={`price-card-${data.type}-ul`}>
                    <ColorUXFactory>
                        {data.list.map((d, index)=>{
                            return(
                                <li key={index} className={`price-card-${data.type}-li-${index}`}>
                                    <ColorUX>
                                    <span  className={`price-card-${data.type}-span-${index}`}>&#x2713;</span>
                                    </ColorUX>
                                    {d}
                                </li>
                            )
                        })}
                    </ColorUXFactory>
                    </ul>
                    <button className={`price-card-button`}>
                        <ColorUX>
                        <span className={`price-card-button-span`}>{data.buttonText}</span>
                        </ColorUX>
                    </button>
                </ColorUXFactory>
            </div>
        </ColorUX>
      </div>
    </ColorUX>
  );
};

export default PriceCard;
