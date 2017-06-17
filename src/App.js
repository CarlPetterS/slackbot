import React, { Component } from 'react'
import { Header } from './components/header'
import { Footer } from './components/footer'


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
        <Footer />
      </Container>
    );
  }
}

export default App;