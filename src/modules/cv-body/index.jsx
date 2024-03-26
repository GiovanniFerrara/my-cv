import styled from "styled-components";
import "typeface-quicksand";

import SectionTitle from "../../components/SectionTitle";
import JobCard from "../cards/job-card";
import EducationCard from "../cards/education-card";
import ProjectCard from "../cards/project-card";
import LanguageCard from "../cards/language-card";
import SkillCard from "../cards/skill-card";
import { ProjectsWrapper } from "../styles";

const Body = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 0 ${(props) => 20 * props.theme.scaleFactor}px;
`;

const Column = styled.div`
  font-size: ${(props) => 16 * props.theme.scaleFactor}px;
  flex: 1;
  margin: 0 ${(props) => 20 * props.theme.scaleFactor}px;
`;

const jobs = [];
const educations = [];
const side_projects = [];
const languages = [];
const skills = [];

const CvBody = () => {
  return (
    <Body>
      <Column>
        <SectionTitle>WORK EXPERIENCE</SectionTitle>
        {jobs.map((job) => {
          const { image, companyName, startPeriod, endPeriod, title } = job;

          return (
            <JobCard
              key={companyName}
              image={image}
              companyName={companyName}
              startPeriod={startPeriod}
              endPeriod={endPeriod}
              title={title}
              description={job.node.description}
            />
          );
        })}
      </Column>
      <Column>
        <SectionTitle>OTHER PROJECTS</SectionTitle>
        <ProjectsWrapper>
          <ul>
            {side_projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.node.description}
                />
              );
            })}
          </ul>
        </ProjectsWrapper>
        <SectionTitle>LANGUAGES</SectionTitle>
        {languages.map((lang, i) => {
          const { level, language } = lang;

          return (
            <LanguageCard
              key={language}
              language={language}
              level={level}
              lastItem={languages.length === i + 1}
            />
          );
        })}

        <SectionTitle>TECHNICAL SKILLS</SectionTitle>
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill.title}
              title={skill.title}
              list={skill.node.list}
            />
          );
        })}
        <SectionTitle>EDUCATION</SectionTitle>
        {educations.map((education) => {
          const { image, university, startPeriod, endPeriod, title } =
            education;

          return (
            <EducationCard
              key={university}
              image={image}
              university={university}
              startPeriod={startPeriod}
              endPeriod={endPeriod}
              title={title}
              description={education.node.description}
            />
          );
        })}
      </Column>
    </Body>
  );
};

export default CvBody;
