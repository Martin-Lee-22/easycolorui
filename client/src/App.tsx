
import { useRef, useState } from 'react'
import Sidebar from './components/sidebar/sideBar'
import Layout from './layout/layout'
import ViewerPage from './pages/viewerPage'
import './scss/app.scss'
import { color } from './types/colors'
import ColorsContext from './context/colorsContextProvider'

function App() {
  const [colors, setColors] = useState<color[]>([])
  const color = useRef<color>()
  return (
    <Layout>
      <ColorsContext.Provider value={{colors, setColors, color}}>
        <ViewerPage/>
        <Sidebar/>
      </ColorsContext.Provider>
    </Layout>
  )
}

export default App
