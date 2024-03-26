import PropTypes from "prop-types"; // Add this import

import Row from "../../components/Row";
import ImageWithLabel from "../../components/ImageWithLabel";
import { Card, Period, Title, Description } from "../styles";
import { getPeriod } from "../helpers";

const EducationCard = ({
  image,
  university,
  startPeriod,
  endPeriod,
  description,
  title,
}) => {

  return (
    <Card>
      <Row>
        <ImageWithLabel text={university} image={image} />
        <Period>{getPeriod(startPeriod, endPeriod)}</Period>
      </Row>
      <Title>{title}</Title>
      <Description dangerouslySetInnerHTML={{ __html: description }} />
    </Card>
  );
};

EducationCard.propTypes = {
  image: PropTypes.string.isRequired,
  university: PropTypes.string.isRequired,
  startPeriod: PropTypes.string.isRequired,
  endPeriod: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default EducationCard; // Export the component with the updated display name
