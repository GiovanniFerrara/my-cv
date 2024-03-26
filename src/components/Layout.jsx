import styled from "styled-components";
import "reset-css";
import "../global-styles.css";
import "typeface-quicksand";
import "typeface-lato";
import PropTypes from "prop-types";

const LayoutStyled = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  min-width: ${(props) => 210 * props.scaleFactor}px;
  padding-bottom: 100px;
  padding-top: 100px;
`;

const Layout = (props) => {
  return <LayoutStyled {...props}>{props.children}</LayoutStyled>;
};

Layout.displayName = "Layout";

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
