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

const SharingButtons = (props) => {
  const { slug, title } = props.data
  const url = `${constants.siteUrl}/${slug}`

  return (
    <Container>
      <h4>Share your space experience with your friends:</h4>

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
  data: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}

export default SharingButtons
