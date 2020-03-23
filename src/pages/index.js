import React, { Fragment } from 'react'
import Curriculum from '../modules/cv'
import SEO from '../components/Seo'

export default () => {
  return (
    <Fragment>
      <SEO title='Giovanni Ferrara CV' />
      <Curriculum />
    </Fragment>
  )
}
