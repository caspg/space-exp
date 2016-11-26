import React, { PropTypes } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid white;
  border-radius: 5px;
  overflow: hidden;

  display: block;
  width: 50%;
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
  padding: 10px 20px;
  background-color: white;
  text-align: left;
`

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
`

const Explanation = styled.p`
  font-weight: 300;
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
