import AppView from 'components/AppView'

import scrollToTop from 'utils/scrollToTop'
import feedRoute from './Feed'
import apodDetailsRoute from './ApodDetails'
import aboutRoute from './About'

export default {
  path: '/',
  component: AppView,
  onEnter: scrollToTop,
  getIndexRoute: feedRoute,
  childRoutes: [
    aboutRoute,

    apodDetailsRoute, // this guy needs to be last
  ],
}
