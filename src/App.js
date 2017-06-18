import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { Landing } from './components/landing'
import { Onboard } from './components/onboard'

import './styles/style.css'

const Container = ({ children }) => (
  <div className="container">
    {children}
  </div>
)

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/onboard' component={Onboard} />
          </Switch>
        <Footer />
      </Container>
    );
  }
}

export default App;