export default (partialNextState, callback) => {
  require.ensure([], (require) => {
    callback(null, {
      component: require('./containers/FeedContainer').default,
    })
  }, 'home')
}
