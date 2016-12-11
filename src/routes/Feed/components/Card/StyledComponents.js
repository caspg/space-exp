import styled from 'styled-components'
import { Link } from 'react-router'

import colors from 'styles/constants/colors'

export const CardContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;

  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.40), 0 6px 6px rgba(0,0,0,0.53);
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const DetailsDiv = styled.div`
  margin: 0;
  margin-top: -10px;
  padding: 10px 20px;
  background-color: ${colors.grey200};
  text-align: left;
`

export const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${colors.grey300};
  text-decoration: none !important;
`

export const Explanation = styled.p`
  font-weight: 300;
  text-align: justify;
`

export const StyledLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;

  &:hover {
    color: ${colors.black};
  }

  &:visited {
    color: ${colors.black};
  }
`
