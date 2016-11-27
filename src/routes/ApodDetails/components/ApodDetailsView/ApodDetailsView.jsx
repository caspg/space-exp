import React, { PropTypes } from 'react'

import ApodDetails from '../ApodDetails'
import {
  DetailsContainer,
  Wrapper,
  DetailsWrapper,
  Image,
} from './StyledComponents'

const ApodDetailsView = props => (
  <DetailsContainer>
    <Wrapper>
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
