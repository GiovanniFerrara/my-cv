import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import A4 from '../components/A4'
import HeaderControls from './header-controls'
import { ZOOM_TYPE, ZOOM_STEP } from '../config'

export default () => {
  const [scaleFactor, setScaleFactor] = useState(4)

  const handleZoomChange = (type)=> {
    if(type===ZOOM_TYPE.IN){
      if(scaleFactor > 8) return
      setScaleFactor(scaleFactor+ZOOM_STEP)
    } else {
      if(scaleFactor < 3) return
      setScaleFactor(scaleFactor-ZOOM_STEP)
    }
  }
  return (
    <ThemeProvider theme={{scaleFactor: scaleFactor/4}}>
      <Layout>
        <HeaderControls handleZoomChange={handleZoomChange} />
        <A4 scaleFactor={scaleFactor}>
          Hello world
        </A4>
    </Layout>
    </ThemeProvider>
  )
    
}
