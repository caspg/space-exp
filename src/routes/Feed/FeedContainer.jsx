import React, { Component, PropTypes } from 'react'

import { fetchApods } from 'utils/api'
import Loader from 'components/Loader'
import CardsWrapper from './components/CardsWrapper'
import Card from './components/Card'

class FeedContainer extends Component {
  static fetchData(date = '') {
    return fetchApods(date)
  }

  constructor(props) {
    super(props)

    this.state = {
      isNextPageLoading: false,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    const { apods } = this.props

    if (!apods || apods.length === 0) {
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
      this.handleFetchingData()
    }
  }

  handleFetchingData() {
    const { apodsNextDate, onNewApodsData } = this.props

    if (apodsNextDate) {
      this.setState({ isNextPageLoading: true })

      FeedContainer.fetchData(apodsNextDate).then((apodsData) => {
        this.setState({ isNextPageLoading: false })
        onNewApodsData(apodsData)
      })
    }
  }

  render() {
    const { isNextPageLoading } = this.state

    const cards = this.props.apods.map((apod, i) =>
      <Card key={i} apod={apod} />,
    )

    return (
      <CardsWrapper>
        {cards}
        {isNextPageLoading && <Loader />}
      </CardsWrapper>
    )
  }
}

FeedContainer.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object),
  apodsNextDate: PropTypes.string,
  onNewApodsData: PropTypes.func,
}

export default FeedContainer
