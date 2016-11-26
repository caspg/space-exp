import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'

import constants from 'styles/constants'

const HeaderContent = styled.header`
  background-color: white;
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
