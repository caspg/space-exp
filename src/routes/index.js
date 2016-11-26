import AppContainer from 'containers/AppContainer'

import feedRoute from './Feed'

export default {
  path: '/',
  component: AppContainer,
  getIndexRoute: feedRoute,
}
