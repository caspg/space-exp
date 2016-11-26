import ensure from 'utils/polyfills/ensure'

export default (partialNextState, callback) => {
  ensure([], (require) => {
    callback(null, {
      component: require('./components/FeedView').default,
    })
  }, 'home')
}
