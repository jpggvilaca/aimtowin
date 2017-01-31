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
            <div className="banner hero">
              <h1>ATW-ESPORTS</h1>
            </div>
            <div className="banner news">
              <h1>Notícias</h1>
            </div>
            <div className="banner events">
              <h1>Eventos</h1>
              <h3>
                MESC 7 e 8 de Abril<br/>Digital Games Lab (Campus do IPCA, Barcelos)
              </h3>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
