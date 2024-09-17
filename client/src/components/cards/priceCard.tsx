import ColorUX from "../colorUX";
import "../../scss/components/card.scss";
import ColorUXFactory from "../colorUXFactory";
import { priceCardDataType } from "../../data/components";

const PriceCard = ({data}:{data:priceCardDataType}) => {
  return (
    <ColorUX>
      <div id={`price-card`}>
        <ColorUX>
            <div>
                <ColorUXFactory>
                    <h3>{data.type}</h3>
                    <h1>{data.price}</h1>
                    <hr/>
                    <ul>
                    <ColorUXFactory>
                        {data.list.map((data, index)=>{
                            return(
                                <li key={index}>
                                    <ColorUX>
                                    <span>&#x2713;</span>
                                    </ColorUX>
                                    {data}
                                </li>
                            )
                        })}
                    </ColorUXFactory>
                    </ul>
                    <button>
                        <ColorUX>
                        <span>{data.buttonText}</span>
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
