import React from 'react'
import styled from 'styled-components'
import 'typeface-roboto'

const ButtonBase = styled.button`
  border: 1px solid #fff;
  color: #fff;
  padding: 12px;
  background-color: #000;
  text-decoration: none;
  font-size: 16px;
  box-shadow: none;
  text-align: center;
  display: inline-block;
  opacity: 1;
  font-family: 'Source Sans Pro', sans-serif;
  width: ${props => props.width};
  cursor: pointer;
  
  :active, :focus{
    outline: none;
    border: 1px solid #fff;
  }
`

const Button = ({children, ...props}) => {
  return (
    <ButtonBase {...props}>
      {children}
    </ButtonBase>
  )
}

export default Button