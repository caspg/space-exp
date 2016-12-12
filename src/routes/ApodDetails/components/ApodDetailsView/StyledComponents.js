import styled from 'styled-components'

import colors from 'styles/constants/colors'

export const DetailsContainer = styled.div`
  text-align: center;
  margin: 0 -5px;
  margin-bottom: 100px;
`

export const Wrapper = styled.div`
  display: inline-block;
`

export const Image = styled.img`
  max-width:100%;
  max-height:100%;
`

export const DetailsWrapper = styled.div`
  padding-bottom: 50px;
  margin-top: -10px;

  border-radius: 5px;
  background-color: ${colors.grey200};
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`
