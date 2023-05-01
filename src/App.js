import {Component} from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import TeamMatches from './components/TeamMatches'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team-matches/:id" component={TeamMatches} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default App
