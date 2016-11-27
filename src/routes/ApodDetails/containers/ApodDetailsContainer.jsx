import React, { Component, PropTypes } from 'react'
import fetch from 'isomorphic-fetch'

import ApodDetails from '../components/ApodDetailsView'

class ApodDetailsContainer extends Component {
  static fetchData(slug) {
    return fetch(`http://localhost:3000/api/apods/${slug}`)
      .then(res => res.json())
  }

  constructor(props) {
    super(props)
    this.state = {
      apod: props.data.apodDetails,
    }
  }

  componentDidMount() {
    if (!this.state.apod) {
      const { slug } = this.props.params
      ApodDetailsContainer.fetchData(slug).then((apod) => {
        this.setState({ apod })
      })
    }
  }

  render() {
    const { apod } = this.state
    return apod ? <ApodDetails apod={apod} /> : null
  }
}


ApodDetailsContainer.propTypes = {
  data: PropTypes.shape({
    apodDetails: PropTypes.object,
  }),
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
}

export default ApodDetailsContainer
