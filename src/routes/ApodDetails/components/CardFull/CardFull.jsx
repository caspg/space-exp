import React, { PropTypes } from 'react'
import styled from 'styled-components'

import constants from 'styles/constants'
import colors from 'styles/constants/colors'

import StyledImage from 'components/StyledImage'
import CardFullDetails from '../CardFullDetails'
import SharingButtons from '../SharingButtons'

const CardWrapper = styled.div`
  text-align: center;
  margin-top: 0;
  padding: 0;

  @media (min-width: ${constants.mobileMediaQuery}px) {
    margin-top: 50px;
    padding: 0 20px;
  }
`

const CardBody = styled.div`
  margin: 0;
  margin-bottom: 100px;
  background-color: ${colors.grey200};
  box-shadow: ${constants.boxShadow};
  overflow: hidden;

  @media (min-width: ${constants.mobileMediaQuery}px) {
    border-radius: 10px;
    display: inline-block;
  }
`

const ImageLink = styled.a`
`

const CardFull = ({ slug, apod }) => {
  const { imageSize, dominantColor, url, title } = apod
  const imageRatio = (imageSize.height / imageSize.width) * 100

  const httpsUrl = url.replace(/^(https?)/, 'https')

  return (
    <CardWrapper>
      <CardBody style={{ width: '100%', maxWidth: imageSize.width }}>
        <ImageLink href={apod.hdurl} target="_blank">
          <StyledImage
            alt={apod.title}
            src={httpsUrl}
            imageRatio={imageRatio}
            dominantColor={dominantColor}
          />
        </ImageLink>
        <CardFullDetails apod={apod} />
        <SharingButtons slug={slug} title={title} />
      </CardBody>
    </CardWrapper>
  )
}

CardFull.propTypes = {
  slug: PropTypes.string.isRequired,
  apod: PropTypes.shape({
    title: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageSize: PropTypes.shape({
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
    }),
    dominantColor: PropTypes.string.isRequired,
  }),
}

export default CardFull
