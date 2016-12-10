import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Card from '../Card'

const FeedDivContainer = styled.div`
  text-align: center;
`

const renderCards = apods => (
  apods.map((apod, i) => <Card key={i} apod={apod} />)
)

const FeedView = props => (
  <FeedDivContainer>
    {renderCards(props.apods)}
  </FeedDivContainer>
)

FeedView.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FeedView
