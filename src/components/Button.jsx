import styled from "styled-components";
import { PropTypes } from "prop-types";

const ButtonBase = styled.button`
  border: 1px solid #fff;
  color: #fff;
  padding: 12px;
  background-color: #000;
  text-decoration: none;
  font-size: 14px;
  box-shadow: none;
  text-align: center;
  display: inline-block;
  opacity: 1;
  width: ${(props) => props.width};
  cursor: pointer;

  :active,
  :focus {
    outline: none;
    border: 1px solid #fff;
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonBase {...props}>{children}</ButtonBase>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
