import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'
import Copyright from '../Copyright'

const DetailsWrapper = styled.div`
  max-width: 500px;
  text-align: left;
  padding: 20px 40px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
`

export const Date = styled.p`
  font-weight: 900;
  font-size: 0.8em;
`

export const Explanation = styled.p`
  font-weight: 300;
  text-align: justify;
  padding: 2.5em 0;
  margin-top: 2em;
  border-top: 1px solid ${colors.grey400};
  border-bottom: 1px solid ${colors.grey400};
`

const CardFullDetails = ({ apod }) => (
  <DetailsWrapper>
    <Title>{apod.title}</Title>
    <Copyright copyright={apod.copyright} />
    <Date>{apod.date}</Date>

    <Explanation>{apod.explanation}</Explanation>
  </DetailsWrapper>
)

CardFullDetails.propTypes = {
  apod: PropTypes.shape({
    title: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
}

export default CardFullDetails
