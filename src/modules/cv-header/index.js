import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '../../components/ImageWithLabel'
import bgSrc from '../../assets/bg.png'
import HeaderBottom from './header-bottom.js'
import { Flex } from '../styles'

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => props.theme.scaleFactor * 180}px;
  background-image: url("${bgSrc}");
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: flex-start;
`

const Title = styled.h1`
  font-size: ${props => 40 * props.theme.scaleFactor}px;
  padding-bottom: ${props => 15 * props.theme.scaleFactor}px;
`
const SubHeader = styled.p`
  font-size: ${props => 17 * props.theme.scaleFactor}px;
  font-family: 'Quicksand', sans-serif;
  padding-left: ${props => 4 * props.theme.scaleFactor}px;
`

const Presentation = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`
const ImgWrapper = styled.div`
  margin: 0 ${props => 36 * props.theme.scaleFactor}px;;
`

export default () => {
  const data = useStaticQuery(graphql`{
    info: markdownRemark(frontmatter: {type: {eq: "personal_info"}}){
        frontmatter{
          subheader
          name
          image {
            data: childImageSharp{
              fixed(width: 300, height: 300){
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
          <Image imageSize={80} image={data.info.frontmatter.image.data.fixed.src} />
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
      <HeaderBottom />
    </Header>
  )
}
