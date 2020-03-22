import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.scaleFactor *16}px;
`
export const Period = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.scaleFactor *14}px;
`

export const Title = styled.div`
  margin-top: ${props => props.theme.scaleFactor *8}px;
  flex: 1;
  font-weight: 500;
  font-size: ${props => props.theme.scaleFactor *14}px;
`

export const Description = styled.div`
  text-align: justify;
  margin-top: ${props => props.theme.scaleFactor *4}px;
  font-size: ${props => props.theme.scaleFactor *14}px;
  line-height: ${props => props.theme.scaleFactor *16}px;

  >ul{
    list-style-type: circle;
  }

  >ul>li{
    margin-left: ${props => props.theme.scaleFactor *20}px;
  }
`
