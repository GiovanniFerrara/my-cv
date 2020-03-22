import React from 'react'
import Row from '../../components/Row'
import ImageWithLabel from '../../components/ImageWithLabel'
import { Card, Period, Title, Description } from './styles'
import { getPeriod } from '../helpers'

export default ({image, university, startPeriod, endPeriod, description, title }) => {
  return (
    <Card>
      <Row>
       <ImageWithLabel text={university} image={image} />
        <Period>
          {getPeriod(startPeriod, endPeriod)}
        </Period>
      </Row>
      <Title>
        {title}
      </Title>
      <Description dangerouslySetInnerHTML={{__html: description}} />
    </Card>
  )
}
