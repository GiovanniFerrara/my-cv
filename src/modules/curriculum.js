import React, { useState } from 'react'
import Layout from '../components/Layout'
import A4 from '../components/A4'
import HeaderControls from './header-controls'
import { ZOOM_TYPE, ZOOM_STEP } from '../config'

export default () => {
  const [scaleFactor, setScaleFactor] = useState(4)

  const handleZoomChange = (type)=> {
    if(type===ZOOM_TYPE.IN){
      setScaleFactor(scaleFactor+ZOOM_STEP)
    } else {
      setScaleFactor(scaleFactor-ZOOM_STEP)
    }
  }
  return (
    <Layout>
      <HeaderControls handleZoomChange={handleZoomChange} />
      <A4 scaleFactor={scaleFactor}>
        Hello world
      </A4>
    </Layout>
  )
}
