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
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${colors.grey400};
  text-decoration: none !important;
`

export const Explanation = styled.p`
  text-align: left;
  color: ${colors.black444};
`

const CardDetails = props =>
  <StyledDiv>
    <Title>
      {props.title}
    </Title>
    <Explanation>
      {truncate(props.explanation, 140)}
    </Explanation>
  </StyledDiv>

CardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
}

export default CardDetails
