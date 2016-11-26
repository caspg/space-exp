import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'
import ApodDetails from '../ApodDetails'

const DetailsContainer = styled.div`
  text-align: center;
  margin: 0 -5px;
  margin-top: 100px;
  margin-bottom: 100px;
`

const Wrapper = styled.div`
  display: inline-block;
`

const Image = styled.img`
  max-width:100%;
  max-height:100%;
`

const DetailsWrapper = styled.div`
  background-color: ${colors.grey300};
  padding-top: 80px;
  padding-bottom: 50px;
  margin-top: -10px;
`

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
    copyright: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
}

export default ApodDetailsView
