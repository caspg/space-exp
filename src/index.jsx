import React from 'react'
import { render } from 'react-dom'
import { match, Router, browserHistory } from 'react-router'

import routes from './routes'

const handleCreateElement = (Component, props) => {
  if (Component.fetchData) {
    const bootDataJSON = document.getElementById('boot-data').textContent
    const bootData = (bootDataJSON !== '') ? JSON.parse(bootDataJSON) : null

    return <Component data={bootData} {...props} />
  }

  return <Component {...props} />
}

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  render(
    <Router {...renderProps} createElement={handleCreateElement} />,
    document.getElementById('app'),
  )
});
