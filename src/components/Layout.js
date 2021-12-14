import React from 'react'
import styled from 'styled-components'
import 'reset-css'
import '../global-styles.css'
import 'typeface-quicksand'
import 'typeface-lato'

const Layout = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  min-width: ${props => 210 * (props.scaleFactor)}px;
  padding-bottom: 100px;
  padding-top: 100px;
`

export default (props) => {
  return (
    <Layout {...props}>
      {props.children}
    </Layout>
  )
}
