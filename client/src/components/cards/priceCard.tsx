import ColorUX from "../colorUX"
import '../../scss/components/card.scss'

const PriceCard = () => {
    return(
        <ColorUX>
            <div id={`price-card`}>
            <ColorUX>
                <h2>
                    Basic
                </h2>
            </ColorUX>
            <ColorUX>
                <h1>
                    Free
                </h1>
            </ColorUX>
            <ColorUX>
                <ul>
                <ColorUX>
                    <li>cofee</li>
                </ColorUX>
                <ColorUX>
                    <li>milk</li>
                    </ColorUX>
                    <ColorUX>
                    <li>tea</li>
                    </ColorUX>
                </ul>
            </ColorUX>
            <ColorUX>
            <button><ColorUX><p>Buy Template</p></ColorUX></button>
            </ColorUX>
            </div>
        </ColorUX>
    )
}

export default PriceCard