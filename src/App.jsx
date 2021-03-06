import React, { useState } from 'react'
import Routes from './Routes'
import Nav from './components/Nav'
import ThemeContext from './contexts/Theme'

const App = () => {
  const [location, setLocation] = useState()

  return (
    <div className={`app app--${location}`}>
      <ThemeContext.Provider value={location}>
        <Nav />
        <Routes setLocation={setLocation} />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
export { ThemeContext }
