import React, { PropTypes } from 'react'
import styled from 'styled-components'

import colors from 'styles/constants/colors'

const DetailsContainer = styled.div`
  max-height: 600px;
  text-align: center;
  margin: 0 -5px;
`

const Wrapper = styled.div`
  display: inline-block;
  background-color: ${colors.grey300};;
`

const Image = styled.img`
  max-width:100%;
  max-height:100%;
`

const DetailsDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px 20px;
  background-color: ${colors.grey200};
  text-align: left;
  width: 100%;
  max-width: 700px;
`

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${colors.grey300};
`

const ApodDetailsView = (props) => {
  return (
    <DetailsContainer>
      <Wrapper>
        <Image src={props.apod.url} />
        <DetailsDiv>
          <Title>
            {props.apod.title}
          </Title>
        </DetailsDiv>
      </Wrapper>
    </DetailsContainer>
  )
}

ApodDetailsView.propTypes = {

}

export default ApodDetailsView
