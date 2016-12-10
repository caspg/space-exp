import React, { PropTypes } from 'react'

import {
  Copyright,
  DetailsDiv,
  Header,
  Title,
  Explanation,
  Date,
} from './StyledComponents'

import SharingButtons from '../SharingButtons'

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

const Details = (props) => {
  const sharingData = {
    slug: props.slug,
    title: props.apod.title,
  }

  return (
    <DetailsDiv>
      <Header>
        <Title>
          {props.apod.title}
        </Title>
        {renderCopyright(props.apod.copyright)}
        <Date>
          {props.apod.date}
        </Date>
      </Header>
      <Explanation>
        {props.apod.explanation}
      </Explanation>
      <SharingButtons data={sharingData} />
    </DetailsDiv>
  )
}

Details.propTypes = {
  apod: PropTypes.shape({
    title: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  slug: PropTypes.string.isRequired,
}

export default Details
