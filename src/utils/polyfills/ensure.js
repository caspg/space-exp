// polyfill webpack require.ensure

export default (d, c) => {
  if (typeof require.ensure !== 'function') {
    return c(require)
  }

  return require.ensure(d, c)
}
