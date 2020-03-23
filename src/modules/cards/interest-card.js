import React from 'react'
import styled from 'styled-components'
import { Card } from '../styles'

const List = styled.div`
  > ul > li {
    display: inline-block;
    margin-top: ${props => props.theme.scaleFactor * 5}px;
    line-height: normal;
    font-size: ${props => props.theme.scaleFactor * 14}px;
    :after{
      content: ','
    }
    :last-child{
      :after{
        content:'.'
      }
    }
  }
`

export default ({list}) => {
  return (
    <Card mb={4}>
      <List dangerouslySetInnerHTML={{__html: list}} />
    </Card>
  )
}
