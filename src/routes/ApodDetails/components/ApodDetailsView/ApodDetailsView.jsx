import React, { PropTypes } from 'react'

import Details from '../Details'
import {
  DetailsContainer,
  Wrapper,
  DetailsWrapper,
  Image,
} from './StyledComponents'

const ApodDetailsView = props => (
  <DetailsContainer>
    <Wrapper>
      <Image src={props.apod.url} />
      <DetailsWrapper>
        <Details apod={props.apod} slug={props.slug} />
      </DetailsWrapper>
    </Wrapper>
  </DetailsContainer>
)

ApodDetailsView.propTypes = {
  apod: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    copyright: PropTypes.string,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  slug: PropTypes.string.isRequired,
}

export default ApodDetailsView
