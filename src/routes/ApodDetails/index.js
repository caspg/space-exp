if (typeof require.ensure !== 'function') require.ensure = (d, c) => { c(require) }

const handleOnEnter = (nextState) => {
  const { location } = nextState
  if (location.action === 'PUSH' && location.pathname !== '/') {
    window.scrollTo(0, 0)
  }
}

export default () => ({
  path: '/:apodId',
  onEnter: handleOnEnter,
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      const ApodDetailsContainer = require('./containers/ApodDetailsContainer').default

      cb(null, ApodDetailsContainer)
    }, 'apod-details');
  },
})
