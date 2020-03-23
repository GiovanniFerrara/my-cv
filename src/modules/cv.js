import React, { useState, useRef } from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/Layout'
import A4 from '../components/A4'
import ControlPanel from './control-panel'
import { ZOOM_TYPE, ZOOM_STEP, INIT_SCALE_FACTOR, ZOOM_BOUNDS } from '../config'
import Header from './cv-header'
import Footer from './cv-footer'
import Body from './cv-body'
import 'typeface-quicksand'

export default () => {
  const [scaleFactor, setScaleFactor] = useState(INIT_SCALE_FACTOR)
  const A4ref = useRef()

  const canvasData = (quality = 3) => {
    const html2canvas = require('html2canvas')
    return html2canvas(A4ref.current, {
      scale: quality
    })
  }
  
  const downloadPDF = async () => {
    const jsPDF = require('jspdf')
    const filename = "Giovanni Ferrara CV.pdf"
    const canvasFinalData = await canvasData()
      let pdf = new jsPDF("p", "mm", "a4")
      pdf.addImage(
        canvasFinalData.toDataURL("image/jpeg"),
        "JPEG",
        0,
        0,
        210,
        298
      )
      pdf.save(filename)
  }

  const handleZoomChange = (type)=> {
    if(type===ZOOM_TYPE.IN){
      if(scaleFactor > ZOOM_BOUNDS.MAX) return
      setScaleFactor(scaleFactor+ZOOM_STEP)
    } else {
      if(scaleFactor < ZOOM_BOUNDS.MIN) return
      setScaleFactor(scaleFactor-ZOOM_STEP)
    }
  }
  return (
    <ThemeProvider theme={{scaleFactor: scaleFactor/INIT_SCALE_FACTOR}}>
      <Layout scaleFactor={scaleFactor}>
        <ControlPanel handleZoomChange={handleZoomChange} downloadPDF={downloadPDF} />
        <A4 scaleFactor={scaleFactor} A4ref={A4ref}>
          <Header />
          <Body />
          <Footer />
        </A4>
    </Layout>
    </ThemeProvider>
  )
}