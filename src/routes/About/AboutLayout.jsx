import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const AboutBody = styled.div`
  max-width: 800px;
`

const AboutLayout = () =>
  <Wrapper>
    <AboutBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </AboutBody>
  </Wrapper>

export default AboutLayout
