
import { useState } from 'react'
import Sidebar from './components/sidebar/sideBar'
import Layout from './layout/layout'
import ViewerPage from './pages/viewerPage'
import './scss/app.scss'
import { color } from './types/colors'
import ColorsContext from './context/colorsContextProvider'
import { defaultColors } from './data/default'

function App() {
  const [colors, setColors] = useState<color[]>(defaultColors)
  const [activeColor, setActiveColor] = useState<color | undefined>()

  return (
    <Layout>
      <ColorsContext.Provider value={{colors, setColors, activeColor, setActiveColor}}>
        <ViewerPage/>
        <Sidebar/>
      </ColorsContext.Provider>
    </Layout>
  )
}

export default App
