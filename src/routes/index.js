import App from 'components/App'

import feedRoute from './Feed'

export default {
  path: '/',
  component: App,
  getIndexRoute: feedRoute,
}
