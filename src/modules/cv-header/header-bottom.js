import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import githubSrc from '../../assets/github.png'
import linkedinSrc from '../../assets/linkedin.png'
import { Flex } from '../styles'

const SubHeader = styled.div`
  display: flex;
  font-size: ${props => props.theme.scaleFactor * 12}px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  height: ${props => props.theme.scaleFactor * 60}px;
  font-weight: 500;
`

const Column = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

const Image = styled.img`
  width: ${props => props.theme.scaleFactor * 24}px;
  height: ${props => props.theme.scaleFactor * 24}px;
`

const Link = styled.a`
  margin-left: ${props => props.theme.scaleFactor * 8}px;
`

export default () => {
  const data = useStaticQuery(graphql`
  {
    info: markdownRemark(frontmatter: {type: {eq: "personal_info"}}){
        frontmatter{
          phone
          email
          address
          github
          linkedin
          birth_country
        }
      }
  }
  
  `)
  const { phone, email, address, github, linkedin } = data.info.frontmatter
  return (
    <SubHeader>
      <Flex mx={32}>
        <Column>
          <Flex>
            {phone}
          </Flex>
          <Flex my={4}>
            {email}
          </Flex>
          <Flex>
            {address}
          </Flex>
        </Column>
      </Flex>
      <Column>
        <Flex mx={32} jc='flex-end'>
          <Link href={github} target='blank'>
            <Image src={githubSrc} />
          </Link>
          <Link href={linkedin} target='blank'>
            <Image src={linkedinSrc} />
          </Link>
        </Flex>
      </Column>
    </SubHeader>
  )
}
