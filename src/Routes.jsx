import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'

const Routes = () => {
  const routes = [
    Home,
  ]

  return (
    <Switch>
      {routes.map((route) => (
        <Route path={`/${route.name}`}>
          {route}
        </Route>
      ))}
    </Switch>
  )
}

export default Routes
