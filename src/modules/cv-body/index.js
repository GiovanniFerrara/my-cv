import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import 'typeface-quicksand'

import SectionTitle from '../../components/SectionTitle'
import JobCard from '../cards/job-card'
import EducationCard from '../cards/education-card'
import ProjectCard from '../cards/project-card'
import LanguageCard from '../cards/language-card'
import SkillCard from '../cards/skill-card'
import InterestCard from '../cards/interest-card'

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

      skills: allMarkdownRemark(filter: {frontmatter: {type: {eq: "skill"}}},  sort: {order:ASC, fields:frontmatter___order}) {
        edges {
          node {
            list: html
            frontmatter{
              title
            }
          }
        }
      }

    interests: allMarkdownRemark(filter: {frontmatter: {type: {eq: "interest"}}}) {
      edges {
        node {
          list: html
          frontmatter{
            title
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
          LANGUAGES
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

        <SectionTitle>
          TECHNICAL SKILLS
        </SectionTitle>
        {data.skills.edges.map( skill => {

          return (
            <SkillCard
              key={skill.node.frontmatter.title}
              title={skill.node.frontmatter.title}
              list={skill.node.list} />)
        } )}

        <SectionTitle>
          INTERESTS
        </SectionTitle>
        {data.interests.edges.map( interest => {

        return (
          <InterestCard
            key={interest.node.frontmatter.title}
            title={interest.node.frontmatter.title}
            list={interest.node.list} />)
        } )}
      </Column>
    </Body>
  )
}
