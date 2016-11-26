import React, { Component, cloneElement, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'

import Header from 'components/Header'

class AppContainer extends Component {
  static fetchData() {
    return fetch('http://localhost:3000/api/apods')
      .then(res => res.json())
  }

  constructor(props) {
    super(props)
    this.state = {
      apods: [],
    }
  }

  componentDidMount() {
    AppContainer.fetchData().then((apods) => {
      this.setState({ apods })
    })
  }

  render() {
    const childrenWithProps = cloneElement(
      this.props.children,
      {
        apods: this.state.apods,
      },
    )

    return (
      <div>
        <Header />
        {childrenWithProps}
      </div>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppContainer
