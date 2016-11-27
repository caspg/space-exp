import React from 'react'
import { render } from 'react-dom'
import { match, Router, browserHistory } from 'react-router'

import routes from './routes'

const handleCreateElement = (Component, props) => {
  if (Component.fetchData) {
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
