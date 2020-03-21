import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button'
import { ZOOM_TYPE } from '../../config'

const ControlPanelBase = styled.div`
  position: fixed;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgba(0,0,0, 0.6);
  top: 0;
  width: 100%;
  z-index: 10;
`
const Zoom = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const ControlPanel = (props) => {
  return (
    <ControlPanelBase>
      <Button> Export To Pdf</Button>
      <Zoom>
        <Button onClick={()=>props.handleZoomChange(ZOOM_TYPE.IN)} width='40px'>+</Button>
        <Button onClick={()=>props.handleZoomChange(ZOOM_TYPE.OUT)} width='40px'>-</Button>
      </Zoom>
    </ControlPanelBase>
  )
}

export default ControlPanel