import React from 'react'
import styled from 'styled-components'
import { Label } from '../modules/styles'

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
  width: ${props => props.theme.scaleFactor * (props.imageSize || 32)}px;
  height: ${props => props.theme.scaleFactor * (props.imageSize || 32)}px;
`

export default ({image, imageSize, text, labelProps}) => {
  return (
    <ImageWithLabel>
      <RoundShape imageSize={imageSize}>
        <Image src={image} />
      </RoundShape>
      {text && <Label {...labelProps}>{text}</Label>}
    </ImageWithLabel>
  )
}
