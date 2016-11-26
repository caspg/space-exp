import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Card from '../Card'

const CardsContainer = styled.div`
  text-align: center;
`

const renderCards = apods => (
  apods.map((apod, i) => <Card key={i} apod={apod} />)
)

const CardSLayout = props => (
  <CardsContainer>
    {renderCards(props.apods)}
  </CardsContainer>
)

CardSLayout.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardSLayout
