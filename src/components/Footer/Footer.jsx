import React from 'react'
import styled from 'styled-components'

import StyledLink from 'components/StyledLink'

const StyledFooter = styled.footer`
  margin-top: 100px;
  color: #ddd;
  text-align: center;
`

const FooterLink = StyledLink('#ddd')

const Footer = () =>
  <StyledFooter>
    <p>
      <FooterLink to="/">
        Feed
      </FooterLink>
      {' | '}
      <FooterLink to="/about">
        About
      </FooterLink>
    </p>

    2016 © SpaceExperience.club
  </StyledFooter>

export default Footer
