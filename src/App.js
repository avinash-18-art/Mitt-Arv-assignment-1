import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetailsPage from './pages/RecipeDetailsPage'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipe/:id" component={RecipeDetailsPage} />
      </Switch>
    </Router>
  )
}

export default App
