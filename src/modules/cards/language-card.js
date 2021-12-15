import React from 'react'
import styled from 'styled-components'

export default ({level, language}) => {
  const LanguageCard = styled.span`
    font-weight: 400;
    padding-right: ${props => props.theme.scaleFactor * 4}px;;
    font-size: ${props => props.theme.scaleFactor * 14}px;
  `

  return (
    <LanguageCard>{language} - {level}, </LanguageCard>
  )
}
