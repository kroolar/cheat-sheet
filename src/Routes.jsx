import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import RubyGems from './pages/RubyGems'
import Home from './pages/Home'

const Routes = () => {
  const routes = [
    Home,
    RubyGems,
  ]

  return (
    <Switch>
      {routes.map((route, index) => (
        <Route exact path={`/${index === 0 ? '' : route.name}`}>
          {route}
        </Route>
      ))}
    </Switch>
  )
}

export default Routes
