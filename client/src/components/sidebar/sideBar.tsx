import '../../scss/components/sidebar/sidebar.scss'
import ColorGroup from './colorGroup'
import Instructions from './instructions'
import PopularPalettes from './popularPalettes'

const Sidebar = () => {
    return(
        <aside className="sidebar">
          <ColorGroup/>
          <hr/>
          <Instructions/>
          <hr/>
          <PopularPalettes/>
        </aside>
    )
}

export default Sidebar