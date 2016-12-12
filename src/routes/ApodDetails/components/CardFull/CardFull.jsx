import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'

import CardFullDetails from '../CardFullDetails'
import SharingButtons from '../SharingButtons'

const CardWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`

const CardBody = styled.div`
  margin: 0 20px;
  margin-bottom: 100px;
  background-color: ${colors.grey200};
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius: 10px;
  overflow: hidden;
  display: inline-block;
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
