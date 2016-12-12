import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'
import truncate from 'utils/truncate'

const StyledDiv = styled.div`
  margin: 0;
  margin-top: -10px;
  padding: 10px 20px;
  background-color: ${colors.grey200};
  text-align: left;
`

export const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${colors.grey300};
  text-decoration: none !important;
`

export const Explanation = styled.p`
  font-weight: 300;
  text-align: justify;
`

const CardDetails = props =>
  <StyledDiv>
    <Title>
      {props.title}
    </Title>
    <Explanation>
      {truncate(props.explanation, 250)}
    </Explanation>
  </StyledDiv>

CardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
}

export default CardDetails
