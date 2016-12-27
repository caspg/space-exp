import AppContainer from 'containers/AppContainer'

import feedRoute from './Feed'
import apodDetailsRoute from './ApodDetails'
import aboutRoute from './About'

export default {
  path: '/',
  component: AppContainer,
  getIndexRoute: feedRoute,
  childRoutes: [
    aboutRoute,

    apodDetailsRoute, // this guy needs to be last
  ],
}
