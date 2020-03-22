import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import 'typeface-quicksand'

import SectionTitle from '../../components/SectionTitle'
import JobCard from './job-card'
import EducationCard from './education-card'

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 ${props => 20*props.theme.scaleFactor}px;
`

const Column = styled.div`
  font-size: ${props => 16*props.theme.scaleFactor}px;
  flex: 1;
  margin: 0 ${props => 20*props.theme.scaleFactor}px;
  border: 1px solid yellow;
`

export default () => {
  const data = useStaticQuery(graphql`
    {
      jobs: allMarkdownRemark(filter: {frontmatter: {type: {eq: "job"}}}, sort: {order:DESC, fields:frontmatter___startPeriod}) {
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

      educations: allMarkdownRemark(filter: {frontmatter: {type: {eq: "education"}}}) {
        edges {
          node {
            description: html
            frontmatter{
              title
              startPeriod
              endPeriod
              university
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
        {data.jobs.edges.map( job => {
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
        <SectionTitle>
          EDUCATION
        </SectionTitle>
        {data.educations.edges.map( job => {
          const {image, university, startPeriod, endPeriod, title} = job.node.frontmatter

          return (
          <EducationCard
            key={university}
            image={image.childImageSharp.fixed.src}
            university={university}
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
