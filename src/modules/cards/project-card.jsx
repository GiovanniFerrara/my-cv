import { Card, Title, Description } from "../styles";
import PropTypes from "prop-types";
import {marked} from "marked";  

const ProjectCard = ({ title, description }) => {
  return (
    <Card mb={"0"}>
      <Title>{title}</Title>
      <Description>
        <ul>
          {description.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{__html: marked(item)}}></li>
          ))}
        </ul>
      </Description>
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
