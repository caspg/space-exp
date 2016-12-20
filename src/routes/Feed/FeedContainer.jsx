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
      nextDate: props.data.apodsNextDate || '',
      isNextPageLoading: false,
    }

    this.handleFetchingData = this.handleFetchingData.bind(this)
  }

  componentDidMount() {
    if (!this.state.data || this.state.data.length === 0) {
      this.handleFetchingData()
    }
  }

  handleFetchingData() {
    const { nextDate, apods } = this.state

    this.setState({ isNextPageLoading: true })

    FeedContainer.fetchData(nextDate).then((apodsData) => {
      this.setState({
        apods: apods.concat(apodsData.apods),
        nextDate: apodsData.meta.nextDate,
        isNextPageLoading: false,
      })
    })
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
    apodsNextDate: PropTypes.string,
  }),
}

export default FeedContainer
