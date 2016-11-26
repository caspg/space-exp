import React, { PropTypes } from 'react'

import Card from '../Card'

const HomeView = (props) => {
  const { apods } = props

  if (apods.length === 0) {
    return null
  }

  return (
    <div>
      {apods.map((apod, i) => <Card key={i} apod={apod} />)}
    </div>
  )
}

HomeView.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object),
}

export default HomeView
