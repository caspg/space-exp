import React from 'react'
import Headroom from 'react-headroom'
import styled from 'styled-components'
import { Link } from 'react-router'

import constants from 'styles/constants'

import StyledLink from 'components/StyledLink'
import Logo from '../Logo'

const HeaderContent = styled.header`
  background-color: white;
  opacity: 0.95;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.8);
  height: ${constants.headerHeight}px;
  padding: 0 20px;
  overflow: hidden;
  text-align: center;
`

const StyledLogo = styled(Logo)`
  display: inline-block;
  height: ${constants.logoHeight}px;
  line-height: ${constants.headerHeight}px;
  vertical-align: middle;
  padding: ${(constants.headerHeight - constants.logoHeight) / 2}px 0;

  @media (min-width: ${constants.mobileMediaQuery}px) {
    margin-top: -8px;
  }
`

const Title = styled.h1`
  margin: 0;
  margin-left: 15px;
  font-size: 1.5em;
  line-height: ${constants.headerHeight}px;
  color: black;
  display: none;

  @media (min-width: ${constants.mobileMediaQuery}px) {
    display: inline-block;
  }
`

const AboutLink = styled(StyledLink)`
  margin-left: 20px;
  line-height: ${constants.headerHeight}px;
`

const Header = () => (
  <Headroom>
    <HeaderContent>
      <Link to="/">
        <StyledLogo />
        <Title>
          SPACE EXPERIENCE
        </Title>
      </Link>

      <AboutLink to="/about">
        ABOUT
      </AboutLink>
    </HeaderContent>
  </Headroom>
)

export default Header
