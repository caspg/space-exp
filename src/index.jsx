import React from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`

const Hello = () => (
  <Title>
    Hello, World!
  </Title>
)

render(
  <Hello />,
  document.getElementById('app'),
)
