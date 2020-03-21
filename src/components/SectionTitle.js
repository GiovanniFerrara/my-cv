import React from 'react'
import styled from 'styled-components'

const SectionTitleBase = styled.div`
  font-size: ${props => props.theme.scaleFactor*25}px;
  color: #565656;
`

const SectionTitle = ({children}) => {
  return (
    <SectionTitleBase>
      {children}
    </SectionTitleBase>
  )
}

export default SectionTitle