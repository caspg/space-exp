import React, { PropTypes } from 'react'
import styled from 'styled-components'

const ImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 0;
  position: relative;
`

const Image = styled.img`
  max-width:100%;
  max-height:100%;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledImage = ({ alt, src, imageRatio, dominantColor }) =>
  <ImageWrapper
    style={{
      paddingTop: `${imageRatio}%`,
      backgroundColor: dominantColor,
    }}
  >
    <Image src={src} alt={alt} />
  </ImageWrapper>

StyledImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  dominantColor: PropTypes.string.isRequired,
  imageRatio: PropTypes.number.isRequired,
}

export default StyledImage
