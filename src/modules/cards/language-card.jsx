import PropTypes from "prop-types";
import styled from "styled-components";

const LanguageCard = ({ level, language, lastItem }) => {
  const LanguageCardStyled = styled.span`
    font-weight: 400;
    padding-right: ${(props) => props.theme.scaleFactor * 4}px;
    font-size: ${(props) => props.theme.scaleFactor * 14}px;
  `;

  return (
    <LanguageCardStyled>
      {language} - {level}
      {`${lastItem ? "." : ","}`}{" "}
    </LanguageCardStyled>
  );
};

LanguageCard.propTypes = {
  level: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  lastItem: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    scaleFactor: PropTypes.number.isRequired,
  }).isRequired,
};

export default LanguageCard;
