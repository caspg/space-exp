import React, { PropTypes } from 'react'
import styled from 'styled-components'

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Google from 'react-sharingbuttons/dist/buttons/Google'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import Reddit from 'react-sharingbuttons/dist/buttons/Reddit'
import Pinterest from 'react-sharingbuttons/dist/buttons/Pinterest'

import constants from 'constants'

const Container = styled.div`
  padding: 20px 0;
`

const SharingButtons = ({ slug, title }) => {
  const url = `${constants.siteUrl}/${slug}`

  return (
    <Container>
      <p>Share your space experience with your friends.</p>

      <div>
        <Facebook url={url} />
        <Google url={url} />
        <Twitter url={url} shareText={`${title} ${url}`} />
        <Reddit url={url} />
        <Pinterest url={url} shareText={title} />
      </div>
    </Container>
  )
}

SharingButtons.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SharingButtons
