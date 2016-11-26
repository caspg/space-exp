export default () => ({
  path: '/:apodId',
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const ApodDetailsContainer = require('./containers/ApodDetailsContainer').default

      cb(null, ApodDetailsContainer)
    }, 'apod-details');
  },
})
