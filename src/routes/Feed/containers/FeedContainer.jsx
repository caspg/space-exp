import React, { Component, PropTypes } from 'react'

import { fetchApods } from 'utils/api'
import FeedView from '../components/FeedView'

class FeedContainer extends Component {
  static fetchData() {
    return fetchApods()
  }

  constructor(props) {
    super(props)

    this.state = {
      apods: props.data.apods || [],
    }
  }

  componentDidMount() {
    if (!this.state.data || this.state.data.length === 0) {
      FeedContainer.fetchData().then((apods) => {
        this.setState({ apods })
      })
    }
  }

  render() {
    return <FeedView apods={this.state.apods} />
  }
}

FeedContainer.propTypes = {
  data: PropTypes.shape({
    apods: PropTypes.arrayOf(PropTypes.object),
  }),
}

export default FeedContainer
