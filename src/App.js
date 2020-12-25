import React from 'react'

import { Switch, Route } from 'react-router-dom'


import Contact from './pages/Contact'
import Home from './pages/Home'

const App = () => {
  return (
  
  <Switch>
      <Route exact= 'true' path='/'>
         <h1> <Home /> </h1>
      </Route>
      <Route exact= 'true' path='/contact'>
         <h1><Contact/> </h1>
      </Route>
      <Route>
        404 not found
      </Route>
     
  </Switch>

  )
}

export default App

