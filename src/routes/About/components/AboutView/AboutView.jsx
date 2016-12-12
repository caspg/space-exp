if (typeof require.ensure !== 'function') require.ensure = (d, c) => { c(require) }

export default (partialNextState, callback) => {
  require.ensure([], (require) => {
    callback(null, {
      component: require('./components/AboutView').default,
    })
  }, 'about')
}
