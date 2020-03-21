import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import A4 from '../components/A4'
import ControlPanel from './control-panel'
import { ZOOM_TYPE, ZOOM_STEP } from '../config'
import Header from './cv-header'
import Body from './cv-body'

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
        <ControlPanel handleZoomChange={handleZoomChange} />
        <A4 scaleFactor={scaleFactor}>
          <Header />
          <Body />
        </A4>
    </Layout>
    </ThemeProvider>
  )
    
}
