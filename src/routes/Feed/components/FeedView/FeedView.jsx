import React, { PropTypes } from 'react'

import CardSLayout from '../CardSLayout'

const FeedView = (props) => {
  const { apods } = props

  if (!apods || apods.length === 0) {
    return null
  }

  return (
    <CardSLayout apods={apods} />
  )
}

FeedView.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object),
}

export default FeedView
