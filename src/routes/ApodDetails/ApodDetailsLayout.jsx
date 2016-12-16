import React, { PropTypes } from 'react'

import Footer from 'components/Footer'
import CardFull from './components/CardFull'

const ApodDetailsLayout = ({ slug, apod }) =>
  <div>
    <CardFull slug={slug} apod={apod} />
    <Footer />
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
