import React, { PropTypes } from 'react'
import styled from 'styled-components'

import StyledLink from 'components/StyledLink'
import CardDetails from '../CardDetails'

const CardWrapper = styled.div`
  border-radius: 5px;
  overflow: hidden;
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.40), 0 6px 6px rgba(0,0,0,0.53);
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Card = props => (
  <CardWrapper>
    <StyledLink to={`/${props.apod.slug}`}>
      <Image src={`/thumbs/${props.apod.slug}.jpg`} />

      <CardDetails
        title={props.apod.title}
        explanation={props.apod.explanation}
      />
    </StyledLink>
  </CardWrapper>
)

Card.propTypes = {
  apod: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
  }),
}

export default Card
