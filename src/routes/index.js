import AppView from 'components/AppView'

import feedRoute from './Feed'
import apodDetailsRoute from './ApodDetails'
import aboutRoute from './About'

export default {
  path: '/',
  component: AppView,
  getIndexRoute: feedRoute,
  childRoutes: [
    aboutRoute,

    apodDetailsRoute, // this guy needs to be last
  ],
}
