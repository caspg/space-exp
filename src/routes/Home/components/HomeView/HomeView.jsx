import React, { PropTypes } from 'react'

const HomeView = (props) => {
  const { apods } = props

  if (apods.length === 0) {
    return null
  }

  return (
    <div>
      {apods.map((apod, i) => <div key={i}>{apod.title}</div>)}
    </div>
  )
}

HomeView.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object),
}

export default HomeView
