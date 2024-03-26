import styled from "styled-components";
import { Card, Title } from "../styles";
import PropTypes from "prop-types";

const List = styled.div`
  > ul > li {
    display: inline-block;
    border-radius: ${(props) => props.theme.scaleFactor * 16}px;
    border: 1px solid #000;
    padding: ${(props) => props.theme.scaleFactor * 4}px
      ${(props) => props.theme.scaleFactor * 8}px;
    margin-right: ${(props) => props.theme.scaleFactor * 5}px;
    margin-top: ${(props) => props.theme.scaleFactor * 8}px;
    line-height: normal;
    font-size: ${(props) => props.theme.scaleFactor * 12}px;
  }
`;

const SkillCard = ({ title, list }) => {
  return (
    <Card mb={4}>
      <Title>{title}</Title>
      <List>
        <ul>
          {list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </List>
    </Card>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.string.isRequired,
};

export default SkillCard;
