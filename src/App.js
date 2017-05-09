import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Containers/Home/Home'
import Header from './Containers/Header/Header'
import About from './Containers/About/About'
import Search from './Containers/Search/Search'
import NotFound from './Containers/NotFound/NotFound'
import './App.scss'

const App = ({store}) => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/search/:searchTerm' component={Search} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App
