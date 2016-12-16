import styled from 'styled-components'

import constants from 'styles/constants'

const CardsWrapper = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (min-width: ${constants.mobileMediaQuery}px) {
    margin-top: 70px;
  }
`

export default CardsWrapper
