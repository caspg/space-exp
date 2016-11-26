import { injectGlobal } from 'styled-components'

import colors from './constants/colors'

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    background-color: ${colors.black};
  }

  html * {
    font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
    font-weight: 400;
  }
`
/* eslint-enable */
