import React from 'react'
import styled from 'styled-components'
import { Card, Title } from '../styles'

const List = styled.div`
  >ul > li {
    display: inline-block;
    border-radius: ${props => props.theme.scaleFactor * 16}px;
    padding: ${props => props.theme.scaleFactor * 4}px ${props => props.theme.scaleFactor * 8}px;
    margin-right: ${props => props.theme.scaleFactor * 5}px;
    margin-top: ${props => props.theme.scaleFactor * 5}px;
    color: #fff;
    background-color: #333;
    line-height: normal;
    font-size: ${props => props.theme.scaleFactor * 12}px;
  }
`

export default ({title, list}) => {
  return (
    <Card mb={4}>
       <Title>
        {title}
      </Title>
      <List dangerouslySetInnerHTML={{__html: list}} />
    </Card>
  )
}
