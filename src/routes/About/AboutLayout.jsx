import React from 'react'
import styled from 'styled-components'

import constants from 'styles/constants'
import colors from 'styles/constants/colors'

const Wrapper = styled.div`
  text-align: center;
`

const AboutBody = styled.div`
  max-width: 700px;
  box-shadow: ${constants.boxShadow};
  background-color: ${colors.grey200};
  padding: 50px;

  @media (min-width: ${constants.mobileMediaQuery}px) {
    border-radius: 10px;
    display: inline-block;
    margin: 0 20px;
    margin-top: 50px;
  }
`

const Paragraph = styled.p`
  text-align: justify;
  font-weight: 300;
`

const AboutLayout = () =>
  <Wrapper>
    <AboutBody>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Paragraph>
    </AboutBody>
  </Wrapper>

export default AboutLayout
