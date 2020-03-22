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
  box-shadow: -8px 10px 46px 0px rgba(0,0,0,0.35);
`

export default (props) => {
  return (
    <A4Base ref={props.A4ref} scaleFactor={props.scaleFactor}>
     {props.children}
    </A4Base>
  )
}
