export default (partialNextState, callback) => {
  require.ensure([], (require) => {
    callback(null, {
      component: require('./components/HomeView').default,
    })
  }, 'home')
}
