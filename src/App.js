import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import SideBySide from './components/SideBySide'
import Map from './components/Map'

import { banners, droneNews } from './common'

class App extends Component {
  render() {
    const $heroBanner = <Banner
      class={banners[0].class}
      id={banners[0].id}
      title={banners[0].title}
      section_title={banners[0].section_title}
      content={banners[0].content}
    />
    const $eventsBanner = <Banner
      class={banners[1].class}
      id={banners[1].id}
      title={banners[1].title}
      section_title={banners[1].section_title}
      content={banners[1].content}
    />

    return (
      <div className="App">
        <Header />
        <main>
          <article>
            {$heroBanner}
          </article>
          <article>
            <SideBySide
              title={droneNews.title}
              css_class={droneNews.css_class}
              content={droneNews.content}
              readmore_content={droneNews.readmore_content}
            />
          </article>
          <article>
            {$eventsBanner}
          </article>
          <article>
            <Map />
          </article>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
