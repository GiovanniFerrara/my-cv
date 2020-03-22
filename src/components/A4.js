import React from 'react'
import styled from 'styled-components'

const A4Base = styled.div`
  width: ${props => 210 * (props.scaleFactor || 1)}px;
  height: ${props => 270 * (props.scaleFactor || 1)}px;
  background: #fff;
  margin-bottom: 80px;
  position: relative;
  z-index: 0;
`

const A4 = (props) => {
  return (
    <A4Base scaleFactor={props.scaleFactor}>
     {props.children}
    </A4Base>
  )
}

export default A4