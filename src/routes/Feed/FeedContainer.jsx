import React, { Component, PropTypes } from 'react'

import { fetchApods } from 'utils/api'
import CardsWrapper from './components/CardsWrapper'
import Card from './components/Card'

class FeedContainer extends Component {
  static fetchData(date = '') {
    return fetchApods(date)
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
      <CardsWrapper>
        {cards}
      </CardsWrapper>
    )
  }
}

FeedContainer.propTypes = {
  data: PropTypes.shape({
    apods: PropTypes.arrayOf(PropTypes.object),
  }),
}

export default FeedContainer
