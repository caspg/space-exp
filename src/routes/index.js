import AppContainer from 'containers/AppContainer'

import feedRoute from './Feed'
import apodDetailsRoute from './ApodDetails'

export default {
  path: '/',
  component: AppContainer,
  getIndexRoute: feedRoute,
  childRoutes: [
    apodDetailsRoute(),
  ],
}
