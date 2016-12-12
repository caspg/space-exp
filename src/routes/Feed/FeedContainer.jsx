import React, { Component, PropTypes } from 'react'

import { fetchApods } from 'utils/api'
import Card from './components/Card'

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
    const cards = this.state.apods.map((apod, i) =>
      <Card key={i} apod={apod} />,
    )

    return (
      <div style={{ textAlign: 'center' }}>
        {cards}
      </div>
    )
  }
}

FeedContainer.propTypes = {
  data: PropTypes.shape({
    apods: PropTypes.arrayOf(PropTypes.object),
  }),
}

export default FeedContainer
