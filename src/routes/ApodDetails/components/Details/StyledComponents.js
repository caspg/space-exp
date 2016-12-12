import styled from 'styled-components'

import colors from 'styles/constants/colors'

export const DetailsDiv = styled.div`
  margin: 0 auto;
  padding: 20px 40px;
  text-align: left;
  width: 80%;
  max-width: 700px;
  margin-bottom: 50px;
  border-radius: 5px;
`

export const Header = styled.div`
  border-bottom: 1px solid ${colors.grey300};
  padding-bottom: 1em;
  margin-bottom: 1em;
`

export const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
`

export const Copyright = styled.p`
  font-size: 0.8em;
`

export const Explanation = styled.p`
  font-weight: 300;
  text-align: justify;
  padding-top: 1.5em;
  padding-bottom: 2.5em;
  margin: 0;
  margin-bottom: 1em;
  border-bottom: 1px solid ${colors.grey300};
`

export const Date = styled.p`
  font-weight: 900;
  font-size: 0.8em;
`
