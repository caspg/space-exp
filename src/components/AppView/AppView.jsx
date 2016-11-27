import React, { PropTypes } from 'react'

import Header from 'components/Header'

const AppView = props => (
  <div>
    <Header />
    {props.children}
  </div>
)

AppView.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppView
