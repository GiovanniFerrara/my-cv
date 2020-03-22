import React from 'react'
import styled from 'styled-components'
import Row from '../../components/Row'
import moment from 'moment'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.scaleFactor *16}px;
`
const Company = styled.div`
  display: flex;
  align-items: center;
`

const CompanyImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
const RoundShape = styled.div`
  width: ${props => props.theme.scaleFactor *40}px;
  height: ${props => props.theme.scaleFactor *40}px;
`
const CompanyName = styled.div`
  margin-left: ${props => props.theme.scaleFactor *8}px; 
  font-weight: 500;
  font-size: ${props => props.theme.scaleFactor *14}px;
`
const Period = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.scaleFactor *14}px;
`
const Description = styled.div`
  text-align: justify;
  font-size: ${props => props.theme.scaleFactor *14}px;
  margin-top: ${props => props.theme.scaleFactor *8}px;
  line-height: ${props => props.theme.scaleFactor *16}px;

  >ul{
    list-style-type: circle;
    margin-top: ${props => props.theme.scaleFactor *8}px;
  }
  >ul>li{
    margin-left: ${props => props.theme.scaleFactor *20}px;
  }
`

export default ({image, companyName, startPeriod, endPeriod, description }) => {
  const getPeriod = ()=> {
    const startDate = moment(startPeriod).format('MM/YYYY')
    const endDate = moment(endPeriod).isValid() ? moment(startPeriod).format('MM/YYYY') : endPeriod
    return `${startDate} - ${endDate}`
  }

  return (
    <Card>
      <Row>
        <Company>
          <RoundShape>
            <CompanyImg src={image} />
          </RoundShape>
          <CompanyName>
            {companyName}
          </CompanyName>
        </Company>
        <Period>
          {getPeriod()}
        </Period>
      </Row>
      <Description dangerouslySetInnerHTML={{__html: description}} />
    </Card>
  )
}
