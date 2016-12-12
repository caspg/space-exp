import { Link } from 'react-router'
import styled from 'styled-components'

import colors from 'styles/constants/colors'

const StyledLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;

  &:hover {
    color: ${colors.black};
  }

  &:visited {
    color: ${colors.black};
  }
`

export default StyledLink
