import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../../components/SectionTitle'
import 'typeface-quicksand'

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 20px;
`

const Column = styled.div`
  font-size: ${props => 16*props.theme.scaleFactor}px;
  padding-top: 24px;
  flex: 1;
  margin: 0 ${props => 20*props.theme.scaleFactor}px;
  max-height: ${props => 760*props.theme.scaleFactor}px;
`

export default () => {
  return (
    <Body>
      <Column>
        <SectionTitle>
          WORK EXPERIENCE
        </SectionTitle>
      </Column>
      <Column>
        <SectionTitle>
          WORK EXPERIENCE
        </SectionTitle>
      </Column>
    </Body>
  )
}
