import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import { Link } from 'react-router'

import constants from 'styles/constants'

import Logo from '../Logo'

const HeaderContent = styled.header`
  background-color: white;
  opacity: 0.95;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.8);
  height: ${constants.headerHeight}px;
  padding: 0 20px;
`

const StyledLogo = styled(Logo)`
  display: inline-block;
  height: 35px;
  line-height: ${constants.headerHeight}px;
  vertical-align: middle;
  margin-top: -8px;
`

const Title = styled.h1`
  margin: 0;
  margin-left: 15px;
  display: inline-block;
  text-transform: uppercase;
  font-size: 1.5em;
  line-height: ${constants.headerHeight}px;
  color: black;
`

console.log(Link)

const Header = () => (
  <Headroom>
    <HeaderContent>
      <Link to="/">
        <StyledLogo />
        <Title>
          space experience
        </Title>
      </Link>
    </HeaderContent>
  </Headroom>
)

export default Header
