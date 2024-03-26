import styled from "styled-components";
import PropTypes from "prop-types";

const Row = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

const RowComponent = ({ children }) => {
  return <Row>{children}</Row>;
};

RowComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

RowComponent.displayName = "Row";

export default RowComponent;
