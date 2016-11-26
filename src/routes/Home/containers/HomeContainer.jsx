import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'

import HomeView from '../components/HomeView'

class HomeContainer extends Component {
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
    HomeContainer.fetchData().then((apods) => {
      this.setState({ apods })
    })
  }

  render() {
    return (
      <HomeView apods={this.state.apods} />
    )
  }
}

export default HomeContainer
