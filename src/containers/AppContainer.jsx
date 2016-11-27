import React, { Component, PropTypes } from 'react'

import Header from 'components/Header'

// TODO change to AppView

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppContainer
