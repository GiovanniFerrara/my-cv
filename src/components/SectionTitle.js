import React from 'react'
import styled from 'styled-components'

const SectionTitleBase = styled.div`
  font-size: ${props => props.theme.scaleFactor*25}px;
  color: #565656;
  margin-top: ${props => props.theme.scaleFactor*16}px;
  margin-bottom: ${props => props.theme.scaleFactor*8}px;
`

const SectionTitle = ({children}) => {
  return (
    <SectionTitleBase>
      {children}
    </SectionTitleBase>
  )
}

export default SectionTitle