import React, { PropTypes } from 'react'

import Header from 'components/Header'

const App = props => (
  <div>
    <Header />
    {props.children}
  </div>
)

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
