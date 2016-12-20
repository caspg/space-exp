import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'
import truncate from 'utils/truncate'

const StyledDiv = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 470px;
  background-color: ${colors.grey200};
  text-align: left;
`

export const Title = styled.h2`
  font-size: 1.6em;
  line-height: 1.2em;
  font-weight: 900;
  text-decoration: none !important;
`

export const Date = styled.p`
  font-weight: 900;
  font-size: 0.8em;
`

export const Explanation = styled.p`
  text-align: left;
  color: ${colors.black444};
  padding-top: 1em;
  border-top: 1px solid ${colors.grey400};
`

const CardDetails = props =>
  <StyledDiv>
    <Title>{props.title}</Title>
    <Date>{props.date}</Date>
    <Explanation>
      {truncate(props.explanation, 140)}
    </Explanation>
  </StyledDiv>

CardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default CardDetails
