import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import FeedView from '../components/FeedView'

class FeedContainer extends Component {
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
    FeedContainer.fetchData().then((apods) => {
      this.setState({ apods })
    })
  }

  render() {
    return (
      <FeedView apods={this.state.apods} />
    )
  }
}

export default FeedContainer
