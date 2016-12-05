import React from 'react'
import styled from 'styled-components'

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Google from 'react-sharingbuttons/dist/buttons/Google'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import Reddit from 'react-sharingbuttons/dist/buttons/Reddit'
import Pinterest from 'react-sharingbuttons/dist/buttons/Pinterest'

const Container = styled.div`
  padding: 20px 0;
`

const SharingButtons = () =>
  <Container>
    <h4>Share your space experience with your friends:</h4>

    <div>
      <Facebook />
      <Google />
      <Twitter />
      <Reddit />
      <Pinterest />
    </div>
  </Container>

export default SharingButtons
