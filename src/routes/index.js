import AppView from 'components/AppView'

import feedRoute from './Feed'
import apodDetailsRoute from './ApodDetails'

export default {
  path: '/',
  component: AppView,
  getIndexRoute: feedRoute,
  childRoutes: [
    apodDetailsRoute(),
  ],
}
