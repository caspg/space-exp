if (typeof require.ensure !== 'function') require.ensure = (d, c) => { c(require) }

export default {
  path: '/:slug',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const ApodDetailsContainer = require('./ApodDetailsContainer').default

      cb(null, ApodDetailsContainer)
    }, 'apod-details');
  },
}
