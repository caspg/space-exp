import React, { Component, PropTypes } from 'react'

import ApodDetails from '../components/ApodDetailsView'

// const findApod = (apods, apodId) => (
  // apods.filter(apod => apod.slug === apodId)[0]
// )

class ApodDetailsView extends Component {
  static fetchData(slug) {
    return fetch(`http://localhost:3000/api/apods/${slug}`)
      .then(res => res.json())
  }

  constructor(props) {
    super(props)
    this.state = {
      apod: null,
    }
  }

  componentDidMount() {
    const { slug } = this.props.params
    ApodDetailsView.fetchData(slug).then((apod) => {
      this.setState({ apod })
    })
  }

  render() {
    const { apod } = this.state
    const shouldRender = apod && apod.length !== 0
    return shouldRender ? <ApodDetails apod={apod} /> : null
  }
}


ApodDetailsView.propTypes = {
  params: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
}

export default ApodDetailsView
