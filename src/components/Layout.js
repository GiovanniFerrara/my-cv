import React from 'react'
import styled from 'styled-components'
import 'reset-css'

const Layout = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: auto;
  margin-top: 80px;
`

export default (props) => {
  return (
    <Layout>
      {props.children}
    </Layout>
  )
}
