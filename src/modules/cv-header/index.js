import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../../components/ImageWithLabel'
import bgSrc from '../../assets/bg.png'
import { Flex } from '../styles'

const Header = styled.div`
  display: flex;
  height: ${props => props.theme.scaleFactor*180}px;
  background-image: url("${bgSrc}");
  background-position: center;
  background-size: cover;
  align-items: center;
`

const Title = styled.h1`
  font-size: ${props => 60*props.theme.scaleFactor}px;
  font-family: 'Roboto';
  padding-bottom: ${props => 15*props.theme.scaleFactor}px;
`
const SubHeader = styled.p`
  font-size: ${props => 20*props.theme.scaleFactor}px;
  font-family: 'Quicksand', sans-serif;
  padding-left: ${props => 4*props.theme.scaleFactor}px;
`

const Presentation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`
const ImgWrapper = styled.div`
  margin: 0 ${props => 36*props.theme.scaleFactor}px;;
`

export default () => {
  const data = useStaticQuery(graphql`{
    info: markdownRemark(frontmatter: {type: {eq: "personal_info"}}){
        frontmatter{
          subheader
          name
          image {
            data: childImageSharp{
              fixed{
                src
              }
            }
          }
        }
      }
  }
  `)

  return (
    <Header>
      <Flex jc='space-between' ai='center'>
        <ImgWrapper>
          <Image imageSize={130} image={data.info.frontmatter.image.data.fixed.src} />
        </ImgWrapper>
        <Presentation>
          <Title>
            {data.info.frontmatter.name}
          </Title>
          <SubHeader>
            {data.info.frontmatter.subheader}
          </SubHeader>
        </Presentation>
      </Flex>
    </Header>
  )
}
