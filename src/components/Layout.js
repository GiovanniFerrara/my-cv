import React from 'react'
import styled from 'styled-components'
import 'reset-css'

const Layout = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: auto;
  margin-top: 100px;
`

export default (props) => {
  return (
    <Layout>
      {props.children}
    </Layout>
  )
}
