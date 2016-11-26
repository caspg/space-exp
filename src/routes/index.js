import App from 'components/App'

import homeRoute from './Home'

export default {
  path: '/',
  component: App,
  getIndexRoute: homeRoute,
}
