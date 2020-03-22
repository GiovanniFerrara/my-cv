import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import 'typeface-quicksand'

import SectionTitle from '../../components/SectionTitle'
import JobCard from './job-card'

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
  border: 1px solid yellow;
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "job"}}}) {
        edges {
          node {
            description: html
            frontmatter{
              title
              startPeriod
              endPeriod
              companyName
              image {
                childImageSharp{
                  fixed{
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Body>
      <Column>
        <SectionTitle>
          WORK EXPERIENCE
        </SectionTitle>
        {data.allMarkdownRemark.edges.map( job => {
          const {image, companyName, startPeriod, endPeriod, title} = job.node.frontmatter

          return (
          <JobCard
            key={companyName}
            image={image.childImageSharp.fixed.src}
            companyName={companyName}
            startPeriod={startPeriod}
            endPeriod={endPeriod}
            title={title}
            description={job.node.description} />)
        })}
      </Column>
      <Column>
        <SectionTitle>
          WORK EXPERIENCE
        </SectionTitle>
      </Column>
    </Body>
  )
}
