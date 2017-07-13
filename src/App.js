import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { Landing } from './components/landing'
import { Container } from './containers/container'
import { Onboard } from './components/onboard'

import './styles/style.css'
import './styles/landing-page.css'
import './styles/onboarding-page.css'


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