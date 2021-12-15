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
  height: ${props => props.theme.scaleFactor * 230}px;
  background-image: url("${bgSrc}");
  background-position: center;
  background-size: cover;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: ${props => 40 * props.theme.scaleFactor}px;
  padding-bottom: ${props => 15 * props.theme.scaleFactor}px;
`
const SubHeader = styled.p`
  font-size: ${props => 17 * props.theme.scaleFactor}px;
  font-family: 'Quicksand', sans-serif;
`

const Presentation = styled.div`
  position: absolute;
  display: flex;
  text-align: center;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  padding-top: ${props => 30 * props.theme.scaleFactor}px;
`
const ImgWrapper = styled.div`
  margin: ${props => 10 * props.theme.scaleFactor}px 0;
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
      <ImgWrapper>
        <Image imageSize={120} image={data.info.frontmatter.image.data.fixed.src} />
      </ImgWrapper>
      <Flex jc='space-between' ai='center'>
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
