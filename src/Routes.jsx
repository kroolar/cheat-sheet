import React, { useEffect } from 'react'
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'

import RubyGems from './pages/RubyGems'
import Home from './pages/Home'

const Routes = ({ setLocation }) => {
  const routes = [
    Home,
    RubyGems,
  ]

  const location = useLocation()

  useEffect(() => { setLocation(location.pathname.substring(1)) }, [location.pathname])

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
