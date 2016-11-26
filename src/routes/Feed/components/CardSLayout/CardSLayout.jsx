import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Card from '../Card'

const CardsContainer = styled.div`
  text-align: center;
`

const CardSLayout = props => (
  <CardsContainer>
    {props.apods.map((apod, i) => <Card key={i} apod={apod} />)}
  </CardsContainer>
)

CardSLayout.propTypes = {
  apods: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardSLayout
