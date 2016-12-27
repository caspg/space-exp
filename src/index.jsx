import React from 'react'
import { render } from 'react-dom'
import { match, Router, browserHistory } from 'react-router'

import routes from './routes'

const handleCreateElement = (Component, props) => {
  if (Object.hasOwnProperty.call(Component, 'needBootData')) {
    return <Component data={window.BOOT_DATA} {...props} />
  }

  return <Component {...props} />
}

match({ routes, history: browserHistory }, (error, redirectLocation, renderProps) => {
  render(
    <Router
      {...renderProps}
      onUpdate={() => { window.scrollTo(0, 0) }}
      createElement={handleCreateElement}
    />,
    document.getElementById('app'),
  )
});
