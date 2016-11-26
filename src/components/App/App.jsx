import React, { PropTypes } from 'react'

import Header from 'components/Header'

const App = props => (
  <div>
    <Header />

  <div>

    {props.children}
  </div>
  </div>
)

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default App
