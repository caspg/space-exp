import React, { PropTypes } from 'react'

import ApodFooter from './components/ApodFooter'
import CardFull from './components/CardFull'

const ApodDetailsLayout = ({ slug, apod }) =>
  <div>
    <CardFull slug={slug} apod={apod} />
    <ApodFooter />
  </div>

ApodDetailsLayout.propTypes = {
  slug: PropTypes.string.isRequired,
  apod: PropTypes.shape({
    title: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
}

export default ApodDetailsLayout
