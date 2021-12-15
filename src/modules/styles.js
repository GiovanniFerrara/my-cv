import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${props => props.theme.scaleFactor * (props.mb || 24)}px;
`

export const Label = styled.div`
  font-size: ${props => props.theme.scaleFactor *14}px;
  padding-left: ${props => props.theme.scaleFactor *8}px;;
  font-weight: ${props => props.fontWeight ? props.fontWeight : 500};
`

export const Period = styled.div`
  display: flex;
  font-weight: 700;
  align-items: center;
  font-size: ${props => props.theme.scaleFactor * 14}px;
`

export const Title = styled.span`
  margin-top: ${props => props.theme.scaleFactor * 8}px;
  margin-bottom: ${props => props.theme.scaleFactor * 2}px;
  flex: 1;
  font-size: ${props => props.theme.scaleFactor * 14}px;
  `
export const ProjectTitle = styled(Title)`
  font-weight: 500;
  `

export const Description = styled.div`
  text-align: justify;
  margin-top: ${props => props.theme.scaleFactor * 4}px;
  font-size: ${props => props.theme.scaleFactor * 14}px;
  line-height: ${props => props.theme.scaleFactor * 16}px;
  
  >ul{
    list-style-type: circle;
  }
  
  >ul>li{
    margin-left: ${props => props.theme.scaleFactor * 20}px;
  }
  `

export const ProjectsWrapper = styled(Description)``

export const Flex = styled.div`
  align-items: ${props => props.ai};
  display: flex;
  flex: 1;
  justify-content: ${props => props.jc};
  margin: ${props => props.theme.scaleFactor * (props.my || 0)}px ${props => props.theme.scaleFactor * (props.mx || 0)}px;
`
