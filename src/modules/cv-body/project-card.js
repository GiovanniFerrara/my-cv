import React from 'react'
import { Card, Title, Description } from './styles'

export default ({title, description }) => {
  return (
    <Card>
      <Title>
        {title}
      </Title>
      <Description dangerouslySetInnerHTML={{__html: description}} />
    </Card>
  )
}
