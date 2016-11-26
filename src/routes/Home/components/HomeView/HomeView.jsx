import React, { PropTypes } from 'react'

import CardSLayout from '../CardSLayout'

const HomeView = (props) => {
  const { apods } = props

  if (apods.length === 0) {
    return null
  }

  return (
    <CardSLayout apods={apods} />
  )
}

HomeView.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object),
}

export default HomeView
