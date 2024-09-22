
import { useEffect, useState } from 'react'
import Sidebar from './components/sidebar/sideBar'
import Layout from './layout/layout'
import ViewerPage from './pages/viewerPage'
import './scss/app.scss'
import { color } from './types/colors'
import ColorsContext from './context/colorsContextProvider'
import { defaultColors } from './data/default'
import { useMediaQuery } from 'react-responsive'

function App() {
  const [colors, setColors] = useState<color[]>(defaultColors)
  const [activeColor, setActiveColor] = useState<color | undefined>()
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })
  const [showSideBar, setShowSideBar] = useState<boolean>(true)

  useEffect(()=>{
    if(isMobile) setShowSideBar(false)
  },[isMobile])
  
  return (
    <Layout>
      <ColorsContext.Provider value={{colors, setColors, activeColor, setActiveColor}}>
        <ViewerPage/>
        <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} isMobile={isMobile}/>
        <img src='../public/hamburger.png' alt='hamburger' className={'hamburger ' + (!isMobile && 'hide')} onClick={() => setShowSideBar(!showSideBar)}/>
      </ColorsContext.Provider>
    </Layout>
  )
}

export default App
