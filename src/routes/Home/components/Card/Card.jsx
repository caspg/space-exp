import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'

const CardContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;

  display: block;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 70px;
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

const DetailsDiv = styled.div`
  margin: 0;
  margin-top: -5px;
  padding: 10px 20px;
  background-color: ${colors.grey200};
  text-align: left;
`

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${colors.grey300};
`

const Explanation = styled.p`
  font-weight: 300;
  text-align: justify;
`

const Card = props => (
  <CardContainer>
    <Img src={props.apod.url} />
    <DetailsDiv>
      <Title>
        {props.apod.title}
      </Title>
      <Explanation>
        {props.apod.explanation}
      </Explanation>
    </DetailsDiv>
  </CardContainer>
)

Card.propTypes = {
  apod: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
  }),
}

export default Card
