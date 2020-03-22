import React from 'react'
import styled from 'styled-components'
import 'reset-css'
import '../global-styles.css'

const Layout = styled.div`
  position: relative;
  height: inherit;
  display: flex;
  justify-content: center;
  min-width: ${props => 210 * (props.scaleFactor)}px;
  overflow-x: auto;
`

export default (props) => {
  return (
    <Layout {...props}>
      {props.children}
    </Layout>
  )
}
