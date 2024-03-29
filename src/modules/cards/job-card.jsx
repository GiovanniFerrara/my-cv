import Row from "../../components/Row";
import ImageWithLabel from "../../components/ImageWithLabel";
import { Card, Period, Title, Description } from "../styles";
import { getPeriod } from "../helpers";
import PropTypes from "prop-types";
import {marked} from "marked";

const JobCard = ({
  image,
  companyName,
  startPeriod,
  endPeriod,
  description,
  title,
}) => {
  return (
    <Card>
      <Row>
        <ImageWithLabel
          text={companyName}
          image={image}
          labelProps={{ fontWeight: 700 }}
        />
        <Period>{getPeriod(startPeriod, endPeriod)}</Period>
      </Row>
      <Title>{title}</Title>
      <Description> <ul>
        {description.map((item) => (
          <li key={item} dangerouslySetInnerHTML={{__html: marked(item)}}></li>
        ))}
      </ul></Description>
    </Card>
  );
};

JobCard.propTypes = {
  image: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  startPeriod: PropTypes.string.isRequired,
  endPeriod: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default JobCard; // Export the component
