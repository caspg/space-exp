import React, { Component, PropTypes } from 'react'

import { fetchApods } from 'utils/api'
import Loader from 'components/Loader'
import CardsWrapper from './components/CardsWrapper'
import Card from './components/Card'
import LoadMoreLink from './components/LoadMoreLink'

class FeedContainer extends Component {
  static fetchData(date = '') {
    return fetchApods(date)
  }

  constructor(props) {
    super(props)

    this.state = {
      isNextPageLoading: false,
      mounted: false,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.setState({ mounted: true }) // eslint-disable-line react/no-did-mount-set-state
    window.addEventListener('scroll', this.handleScroll)

    const { apods } = this.props
    if (!apods || apods.length === 0) {
      this.handleFetchingData()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const bottomOffset = 600
    const currentPosition = window.innerHeight + window.scrollY + bottomOffset
    const scrolledToBottom = currentPosition >= document.body.offsetHeight
    const { isNextPageLoading } = this.state
    const { apodsNextDate } = this.props

    if (scrolledToBottom && !isNextPageLoading && apodsNextDate) {
      this.handleFetchingData()
    }
  }

  handleFetchingData() {
    const { apodsNextDate, onNewApodsData } = this.props

    this.setState({ isNextPageLoading: true })

    FeedContainer.fetchData(apodsNextDate).then((apodsData) => {
      this.setState({ isNextPageLoading: false })
      onNewApodsData(apodsData)
    })
  }

  render() {
    const { isNextPageLoading, mounted } = this.state
    const { apodsNextDate } = this.props

    const cards = this.props.apods.map((apod, i) =>
      <Card key={i} apod={apod} />,
    )

    const loadMoreLink = (
      <LoadMoreLink
        href={`/?date=${apodsNextDate}`}
      >
        Load more apods
      </LoadMoreLink>
    )

    return (
      <CardsWrapper>
        {cards}

        {!mounted && loadMoreLink}
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
