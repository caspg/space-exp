import React from 'react'
import { render } from 'react-dom'
import { match, Router, browserHistory } from 'react-router'

import routes from './routes'

const shouldAddBootData = ({ name }) =>
  ['AppContainer', 'ApodDetailsContainer'].indexOf(name) > -1

const handleCreateElement = (Component, props) => {
  if (shouldAddBootData(Component)) {
    return <Component data={window.BOOT_DATA} {...props} />
  }

  return <Component {...props} />
}

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  render(
    <Router {...renderProps} createElement={handleCreateElement} />,
    document.getElementById('app'),
  )
});
