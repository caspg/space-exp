import React, { PropTypes } from 'react'

import ApodDetails from '../components/ApodDetailsView'

const findApod = (apods, apodId) => (
  apods.filter(apod => apod.slug === apodId)[0]
)

const ApodDetailsView = (props) => {
  const { apods, params } = props
  const apod = findApod(apods, params.apodId)
  const shouldRender = apod && apod.length !== 0

  return shouldRender ? <ApodDetails apod={apod} /> : null
}

ApodDetailsView.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object),
  params: PropTypes.shape({
    apodId: PropTypes.string.isRequired,
  }),
}

export default ApodDetailsView
