import React from 'react'
import styled from 'styled-components'

const ImageWithLabel = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
const RoundShape = styled.div`
  width: ${props => props.theme.scaleFactor *36}px;
  height: ${props => props.theme.scaleFactor *36}px;
`
const Label = styled.div`
  margin-left: ${props => props.theme.scaleFactor *8}px; 
  font-weight: 500;
  font-size: ${props => props.theme.scaleFactor *14}px;
`

export default ({image, text}) => {
  return (
    <ImageWithLabel>
      <RoundShape>
        <Image src={image} />
      </RoundShape>
      <Label>
        {text}
      </Label>
    </ImageWithLabel>
  )
}
