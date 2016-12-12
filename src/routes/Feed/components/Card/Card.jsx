import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'
import constants from 'styles/constants'
import StyledLink from 'components/StyledLink'
import CardDetails from '../CardDetails'

const CardWrapper = styled.div`
  padding: 0 20px;
`

const CardBody = styled.div`
  border-radius: 10px;
  overflow: hidden;
  display: block;
  width: 100%;
  max-width: ${constants.cardWidth}px;
  margin: 0 auto;
  margin-top: 100px;
  background-color: ${colors.grey200};
  box-shadow: ${constants.boxShadow};
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const Card = props => (
  <CardWrapper>
    <CardBody>
      <StyledLink to={`/${props.apod.slug}`}>
        <Image src={`/thumbs/${props.apod.slug}.jpg`} />

        <CardDetails
          title={props.apod.title}
          explanation={props.apod.explanation}
        />
      </StyledLink>
    </CardBody>
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
