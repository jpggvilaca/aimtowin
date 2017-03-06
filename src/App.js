import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'

import { banners } from './common'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <article>
            {banners.map((banner, i) => {
              return (
                <Banner
                  class={banner.class}
                  id={banner.id}
                  title={banner.title}
                  content={banner.content}
                  key={i}
                />
              )
            })}
          </article>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
