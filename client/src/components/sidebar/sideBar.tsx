import { useRef } from 'react'
import '../../scss/components/sidebar/sidebar.scss'
import ColorGroup from './colorGroup'
import Instructions from './instructions'
import PopularPalettes from './popularPalettes'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const Sidebar = ({showSideBar, setShowSideBar, isMobile}:{showSideBar:boolean, setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>, isMobile:boolean}) => {
  const sideBar = useRef(null)
  useOnClickOutside(sideBar, ()=>{setShowSideBar(!showSideBar)}, isMobile, showSideBar)

    return(
        <aside className={'sidebar ' + (isMobile ? (showSideBar ? 'show' : 'hide') : 'show')} ref={sideBar}>
          <ColorGroup/>
          <hr/>
          <Instructions/>
          <hr/>
          <PopularPalettes/>
        </aside>
    )
}

export default Sidebar