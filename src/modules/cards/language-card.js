import React from 'react'
import styled from 'styled-components'
import ImageWithLabel from '../../components/ImageWithLabel'
import { Card } from '../styles'

export default ({image, level, language}) => {
  const ContentBase = styled.div`
    display: flex;
    align-items: center;
  `
  const Content = <ContentBase>{language} | {level}</ContentBase>
  return (
    <Card>
      <ImageWithLabel text={Content} image={image}  />
    </Card>
  )
}
