import styled from "styled-components";
import { Card } from "../styles";
import PropTypes from "prop-types";

const List = styled.div`
  > ul > li {
    display: inline-block;
    margin-top: ${(props) => props.theme.scaleFactor * 5}px;
    line-height: normal;
    font-size: ${(props) => props.theme.scaleFactor * 14}px;
    :after {
      content: ",";
    }
    :last-child {
      :after {
        content: ".";
      }
    }
  }
`;

const InterestCard = ({ list }) => {
  return (
    <Card mb={4}>
      <List dangerouslySetInnerHTML={{ __html: list }} />
    </Card>
  );
};

InterestCard.propTypes = {
  list: PropTypes.string.isRequired,
};

InterestCard.displayName = "InterestCard";

export default InterestCard;
