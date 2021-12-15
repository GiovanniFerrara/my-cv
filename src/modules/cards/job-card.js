import React from 'react'
import Row from '../../components/Row'
import ImageWithLabel from '../../components/ImageWithLabel'
import {Card, Period, Title, Description} from '../styles'
import { getPeriod } from '../helpers'

export default ({image, companyName, startPeriod, endPeriod, description, title }) => {
  return (
    <Card>
      <Row>
       <ImageWithLabel text={companyName} image={image} labelProps={{fontWeight: 700}} />
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
