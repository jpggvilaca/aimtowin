import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <article>
            <div className="hero-banner">
              <h1>ATW-ESPORTS</h1>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
