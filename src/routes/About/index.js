import scrollToTop from 'utils/scrollToTop'

if (typeof require.ensure !== 'function') require.ensure = (d, c) => { c(require) }

export default {
  path: '/about',
  onEnter: scrollToTop,
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const AboutLayout = require('./AboutLayout').default

      cb(null, AboutLayout)
    }, 'about');
  },
}
