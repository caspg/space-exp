import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'
import constants from 'styles/constants'

import StyledLink from 'components/StyledLink'
import StyledImage from 'components/StyledImage'
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
  margin-bottom: 100px;
  background-color: ${colors.grey200};
  box-shadow: ${constants.boxShadow};
`

const Card = ({ apod }) => {
  const { thumbSize, dominantColor, title, explanation, date } = apod
  const imageRatio = (thumbSize.height / thumbSize.width) * 100
  const CardLink = StyledLink()

  return (
    <CardWrapper>
      <CardBody>
        <CardLink to={`/${apod.slug}`}>
          <StyledImage
            src={`/thumbs/${apod.slug}.jpg`}
            imageRatio={imageRatio}
            dominantColor={dominantColor}
          />

          <CardDetails
            date={date}
            title={title}
            explanation={explanation}
          />
        </CardLink>
      </CardBody>
    </CardWrapper>
  )
}

Card.propTypes = {
  apod: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    thumbSize: PropTypes.shape({
      height: PropTypes.number.isRequired,
    }),
    dominantColor: PropTypes.string.isRequired,
  }),
}

export default Card
