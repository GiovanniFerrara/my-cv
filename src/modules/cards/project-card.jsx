import { Card, Title, Description } from "../styles";
import PropTypes from "prop-types";

const ProjectCard = ({ title, description }) => {
  return (
    <Card mb={"0"}>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </Card>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
