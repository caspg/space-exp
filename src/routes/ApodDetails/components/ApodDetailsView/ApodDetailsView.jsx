import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'
import ApodDetails from '../ApodDetails'

const DetailsContainer = styled.div`
  max-height: 600px;
  text-align: center;
  margin: 0 -5px;
  margin-top: 100px;
  margin-bottom: 100px;
`

const Wrapper = styled.div`
  display: inline-block;
  background-color: ${colors.grey300};;
`

const Image = styled.img`
  max-width:100%;
  max-height:100%;
`

const ApodDetailsView = (props) => {
  return (
    <DetailsContainer>
      <Wrapper>
        <Image src={props.apod.url} />
        <ApodDetails apod={props.apod} />
      </Wrapper>
    </DetailsContainer>
  )
}

ApodDetailsView.propTypes = {

}

export default ApodDetailsView
