const styleSheet = require('styled-components/lib/models/StyleSheet')

const globalStyle = require('styles/global').default

const makeStyles = () => {
  const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
  return globalStyle.concat(' ', styles)
}

module.exports = makeStyles
