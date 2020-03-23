import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
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
  const data = useStaticQuery(graphql`{
    info: markdownRemark(frontmatter: {type: {eq: "personal_info"}}){
        frontmatter{
          subheader
          name
        }
      }
  }
  `)

  return (
    <Header>
      <Title>
      {data.info.frontmatter.name}
      </Title>
      <SubHeader>
        {data.info.frontmatter.subheader}
      </SubHeader>
    </Header>
  )
}
