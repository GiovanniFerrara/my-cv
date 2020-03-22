import React from 'react'
import styled from 'styled-components'

const A4Base = styled.div`
  width: ${props => 210 * (props.scaleFactor)}px;
  height: ${props => 297 * (props.scaleFactor)}px;
  background: #fff;
  position: absolute;
  z-index: 0;
  margin-bottom: 100px;
  margin-top: 100px;
`

const A4 = (props) => {
  return (
    <A4Base scaleFactor={props.scaleFactor}>
     {props.children}
    </A4Base>
  )
}

export default A4