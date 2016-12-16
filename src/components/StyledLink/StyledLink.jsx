import { Link } from 'react-router'
import styled from 'styled-components'

import colors from 'styles/constants/colors'

const StyledLink = (color = colors.black222) =>
  styled(Link)`
    color: ${color};
    text-decoration: none;

    &:hover {
      color: ${color};
    }

    &:visited {
      color: ${color};
    }
  `

export default StyledLink
