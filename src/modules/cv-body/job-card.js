import React from 'react'
import styled from 'styled-components'
import Row from '../../components/Row'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`
const Company = styled.div`
  display: flex;
  align-items: center;
`

const CompanyImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
const RoundShape = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
`
const CompanyName = styled.div`
`
const Period = styled.div`
`

export default ({src, companyName, period }) => {
  return (
    <Card>
      <Row>
        <Company>
          <RoundShape>
            <CompanyImg src={src} />
          </RoundShape>
          <CompanyName>
            {companyName}
          </CompanyName>
        </Company>
        <Period>
          {period}
        </Period>
      </Row>
    </Card>
  )
}
