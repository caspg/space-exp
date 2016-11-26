import React, { PropTypes } from 'react'

import ApodDetails from '../ApodDetails'
import {
  DetailsContainer,
  Wrapper,
  DetailsWrapper,
} from './StyledComponents'

const ApodDetailsView = props => (
  <DetailsContainer>
    <Wrapper>
      <Image src={props.apod.url} />
      <DetailsWrapper>
        <ApodDetails apod={props.apod} />
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
}

export default ApodDetailsView
