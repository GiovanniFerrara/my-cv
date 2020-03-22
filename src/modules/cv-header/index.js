import React from 'react'
import styled from 'styled-components'
import 'typeface-quicksand'
import bgSrc from '../../assets/bg.png'

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: ${props => props.theme.scaleFactor*180}px;
  background-image: url("${bgSrc}");
  background-position: center;
  background-size: cover;
  align-items: center;
`

const Title = styled.h1`
  font-size: ${props => 50*props.theme.scaleFactor}px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;
`
const SubHeader = styled.p`
  font-size: ${props => 20*props.theme.scaleFactor}px;
  margin: 0 ${props => 40*props.theme.scaleFactor}px;
  font-family: 'Quicksand', sans-serif;
`

export default () => {
  return (
    <Header>
      <Title>
        GIOVANNI FERRARA
      </Title>
      <SubHeader>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
      </SubHeader>
    </Header>
  )
}
