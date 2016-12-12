import React, { PropTypes } from 'react'
import styled from 'styled-components'

import constants from 'styles/constants'
import colors from 'styles/constants/colors'

import CardFullDetails from '../CardFullDetails'
import SharingButtons from '../SharingButtons'

const CardWrapper = styled.div`
  text-align: center;
  margin-top: 0;

  @media (min-width: ${constants.mobileMediaQuery}px) {
    margin-top: 50px;
  }
`

const CardBody = styled.div`
  margin: 0;
  margin-bottom: 100px;
  background-color: ${colors.grey200};
  box-shadow: ${constants.boxShadow};
  overflow: hidden;
  display: inline-block;

  @media (min-width: ${constants.mobileMediaQuery}px) {
    margin: 0 20px;
    border-radius: 10px;
  }
`

const StyledImage = styled.img`
  max-width:100%;
  max-height:100%;
`

const CardFull = ({ slug, apod }) =>
  <CardWrapper>
    <CardBody>
      <StyledImage src={apod.url} />
      <CardFullDetails apod={apod} />
      <SharingButtons slug={slug} title={apod.title} />
    </CardBody>
  </CardWrapper>

CardFull.propTypes = {
  slug: PropTypes.string.isRequired,
  apod: PropTypes.shape({
    title: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
}

export default CardFull
