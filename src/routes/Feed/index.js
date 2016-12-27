if (typeof require.ensure !== 'function') require.ensure = (d, c) => { c(require) }

export default ({
  component: require('./FeedContainer').default,
})
