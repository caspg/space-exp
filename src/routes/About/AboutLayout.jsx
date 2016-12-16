import React from 'react'
import styled from 'styled-components'

import constants from 'styles/constants'
import colors from 'styles/constants/colors'
import Footer from 'components/Footer'
import Logo from 'components/Logo'

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
  text-align: left;
  padding: 0;
  margin-bottom: 80px;
  color: ${colors.black444};

  @media (min-width: ${constants.mobileMediaQuery}px) {
    padding-left: 80px;
    padding-right: 70px;
  }
`

const Anchor = styled.a`
  color: ${colors.black};

  &:hover {
    color: ${colors.black};
  }

  &:visited {
    color: ${colors.black};
  }
`

const StyledLogo = styled(Logo)`
  opacity: 0.6;
`

const AboutLayout = () =>
  <Wrapper>
    <AboutBody>
      <Paragraph>
        <b>SPACE EXPERIENCE</b> brings you each day a stunning picture of our universe.
        Pictures and explanations are provided by <Anchor href="https://apod.nasa.gov">apod.nasa.gov</Anchor>.
        The main purpose of this website is to provide better user experience
        during explorations of amazing <b>APOD{"'"}</b>s content.
      </Paragraph>

      <Paragraph>
        <b>Astronomy Picture of the Day (APOD)</b> is originated, written,
        coordinated, and edited since 1995 by Robert Nemiroff and Jerry Bonnell.
        The APOD archive contains the largest collection of annotated
        astronomical images on the internet.
      </Paragraph>

      <Paragraph>
        This website is opensource, code can be found on <Anchor href="https://github.com/caspg/space-exp">GitHub</Anchor>.
      </Paragraph>

      <Paragraph>
        Created by <b>Kacper Golinski</b>. Please feel free to contact me in any case. You can reach me at{' '}
        <Anchor href="mailto:kacper.golinski@gmail.com">kacper.golinski@gmail.com</Anchor>
        {' '}or <Anchor href="https://twitter.com/caspg_">@caspg_</Anchor>.
      </Paragraph>

      <StyledLogo />
    </AboutBody>

    <Footer />
  </Wrapper>

export default AboutLayout
