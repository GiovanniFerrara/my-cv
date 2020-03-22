import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import 'typeface-quicksand'

import SectionTitle from '../../components/SectionTitle'
import JobCard from './job-card'
import EducationCard from './education-card'
import ProjectCard from './project-card'
import LanguageCard from './language-card'

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 ${props => 20*props.theme.scaleFactor}px;
`

const Column = styled.div`
  font-size: ${props => 16*props.theme.scaleFactor}px;
  flex: 1;
  margin: 0 ${props => 20*props.theme.scaleFactor}px;
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
      side_projects: allMarkdownRemark(filter: {frontmatter: {type: {eq: "side_project"}}}) {
        edges {
          node {
            description: html
            frontmatter{
              title
            }
          }
        }
      }
      languages: allMarkdownRemark(filter: {frontmatter: {type: {eq: "language"}}},  sort: {order:ASC, fields:frontmatter___order}) {
        edges {
          node {
            frontmatter{
              language
              level
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
        {data.educations.edges.map( education => {
          const {image, university, startPeriod, endPeriod, title} = education.node.frontmatter

          return (
          <EducationCard
            key={university}
            image={image.childImageSharp.fixed.src}
            university={university}
            startPeriod={startPeriod}
            endPeriod={endPeriod}
            title={title}
            description={education.node.description} />)
        })}
      </Column>
      <Column>
        <SectionTitle>
          SIDE PROJECTS
        </SectionTitle>

        {data.side_projects.edges.map( project => {
          return (
          <ProjectCard
            key={project.node.frontmatter.title}
            title={project.node.frontmatter.title}
            description={project.node.description} />)
          })}
        <SectionTitle>
          LANGUGES
        </SectionTitle>
        {data.languages.edges.map( lang => {
          const { image, level, language } = lang.node.frontmatter

          return (
          <LanguageCard
            key={language}
            language={language}
            image={image.childImageSharp.fixed.src}
            level={level} />)
          })}
      </Column>
    </Body>
  )
}
