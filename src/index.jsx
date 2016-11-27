import React from 'react'
import { render } from 'react-dom'
import { match, Router, browserHistory } from 'react-router'

import routes from './routes'

const handleCreateElement = (Component, props) => {
  const apods = document.getElementById('boot-data').textContent
  return <Component apods={JSON.parse(apods)} {...props} />
}

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  render(
    <Router {...renderProps} createElement={handleCreateElement} />,
    document.getElementById('app'),
  )
});
