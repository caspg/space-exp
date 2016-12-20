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

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    if (!this.state.apods || this.state.apods.length === 0) {
      this.handleFetchingData()
    }

    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const bottomOffset = 600
    const currentPosition = window.innerHeight + window.scrollY + bottomOffset
    const scrolledToBottom = currentPosition >= document.body.offsetHeight
    const { isNextPageLoading } = this.state

    if (scrolledToBottom && !isNextPageLoading) {
      this.setState({ isNextPageLoading: true })
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
