import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'

const DetailsDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px 40px;
  background-color: ${colors.grey200};
  text-align: left;
  width: 100%;
  max-width: 700px;
  margin-bottom: 80px;
`

const Header = styled.div`
  border-bottom: 1px solid ${colors.grey300};
  padding-bottom: 1em;
  margin-bottom: 1em;
`

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
`

const Copyright = styled.p`
  font-size: 0.8em;
`

const Explanation = styled.p`
  font-weight: 300;
  text-align: justify;
  padding-top: 1.5em;
  padding-bottom: 2.5em;
  margin: 0;
  margin-bottom: 1em;
  border-bottom: 1px solid ${colors.grey300};
`

const Date = styled.p`
  font-weight: 900;
  font-size: 0.8em;
`

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
    copyright: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
}

export default ApodDetails
