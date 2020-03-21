import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`

export default ({children}) => {
  return (
      <Row>
        {children}
      </Row>
  )
}
