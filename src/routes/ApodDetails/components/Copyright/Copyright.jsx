import React, { PropTypes } from 'react'
import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 0.8em;
`

const Copyright = ({ copyright }) => {
  if (!copyright) {
    return null
  }

  return <StyledParagraph>Copyright: {copyright}</StyledParagraph>
}

Copyright.propTypes = {
  copyright: PropTypes.string,
}

export default Copyright
