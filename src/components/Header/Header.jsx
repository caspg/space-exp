import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import constants from 'styles/constants'

const HeaderContent = styled.header`
  background-color: white;
  opacity: 0.95;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.8);
  height: ${constants.headerHeight};
  padding: 0 20px;
`

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-size: 1.5em;
  line-height: ${constants.headerHeight};
`

const Header = () => (
  <Headroom>
    <HeaderContent>
      <Title>
        space experience
      </Title>
    </HeaderContent>
  </Headroom>
)

export default Header
