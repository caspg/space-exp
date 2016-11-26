import React, { PropTypes } from 'react'

import {
  Copyright,
  DetailsDiv,
  Header,
  Title,
  Explanation,
  Date,
} from './StyledComponents'

const renderCopyright = (copyright) => {
  if (!copyright) {
    return null
  }

  return (
    <Copyright>
      Copyright: {copyright}
    </Copyright>
  )
}

const ApodDetails = props => (
  <DetailsDiv>
    <Header>
      <Title>
        {props.apod.title}
      </Title>
      {renderCopyright(props.apod.copyright)}
    </Header>
    <Explanation>
      {props.apod.explanation}
    </Explanation>
    <Date>
      {props.apod.date}
    </Date>
  </DetailsDiv>
)

ApodDetails.propTypes = {
  apod: PropTypes.shape({
    title: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
}

export default ApodDetails
