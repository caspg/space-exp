import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import colors from 'styles/constants/colors'
import truncate from 'utils/truncate'

const CardContainer = styled.div`
  border-radius: 5px;
  overflow: hidden;

  display: block;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 100px;
`

const Img = styled.img`
  width: 100%;
  height: auto;
`

const DetailsDiv = styled.div`
  margin: 0;
  margin-top: -10px;
  padding: 10px 20px;
  background-color: ${colors.grey200};
  text-align: left;
`

const Title = styled.h2`
  font-size: 1.3em;
  font-weight: 900;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid ${colors.grey300};
  text-decoration: none !important;
`

const Explanation = styled.p`
  font-weight: 300;
  text-align: justify;
`

const StyledLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;

  &:hover {
    color: ${colors.black};
  }

  &:visited {
    color: ${colors.black};
  }
`

const Card = props => (
  <CardContainer>
    <StyledLink to={`/${props.apod.slug}`}>
      <Img src={props.apod.url} />
      <DetailsDiv>
        <Title>
          {props.apod.title}
        </Title>
        <Explanation>
          {truncate(props.apod.explanation, 250)}
        </Explanation>
      </DetailsDiv>
    </StyledLink>
  </CardContainer>
)

Card.propTypes = {
  apod: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
  }),
}

export default Card
