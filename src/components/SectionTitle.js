import React from 'react'
import styled from 'styled-components'

const SectionTitleBase = styled.div`
  font-size: ${props => props.theme.scaleFactor * 16}px;
  color: #000;
  margin-top: ${props => props.theme.scaleFactor * 24}px;
  margin-bottom: ${props => props.theme.scaleFactor * 8}px;
  font-weight: 700;
`

const SectionTitle = ({children}) => {
  return (
    <SectionTitleBase>
      {children}
    </SectionTitleBase>
  )
}

export default SectionTitle