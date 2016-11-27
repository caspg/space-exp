
import React, { PropTypes } from 'react'

import truncate from 'utils/truncate'

import {
  CardContainer,
  Image,
  DetailsDiv,
  Title,
  Explanation,
  StyledLink,
} from './StyledComponents'

const Card = props => (
  <CardContainer>
    <StyledLink to={`/${props.apod.slug}`}>
      <Image src={`/thumbs/${props.apod.slug}.jpg`} />
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
