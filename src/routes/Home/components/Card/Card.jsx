import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border: 1px solid white;
  display: inline-block;
  width: 450px;
  margin: 20px;
`

const Img = styled.img`
  max-width: 450px;
`

const Paragraph = styled.p`
  padding: 10px;
  background-color: white;
`

const Card = (props) => {
  return (
    <CardContainer>
      <Img src={props.apod.url} />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, at.
      </Paragraph>
    </CardContainer>
  )
}

export default Card
