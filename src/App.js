import {Component} from 'react'

import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'

import Home from './components/Home/index'

import BookMark from './components/BookMark/index'

import Settings from './components/Settings/index'

import Profile from './components/Profile/index'

import NotFound from './components/NotFound/index'

import DataContext from './context/DataContext'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/book-mark" component={BookMark} />
      <Route exact path="/setting" component={Settings} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
