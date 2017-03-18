import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import SideBySide from './components/SideBySide'
import Map from './components/Map'

import { banners, droneNews, eventNews } from './common'

class App extends Component {
  render() {
    const $heroBanner = <Banner
      class={banners[0].class}
      id={banners[0].id}
      title={banners[0].title}
      section_title={banners[0].section_title}
      content={banners[0].content}
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
              section_title={droneNews.section_title}
              readmore_content={droneNews.readmore_content}
              has_readmore={droneNews.has_readmore}
            />
          </article>
          <article>
          <SideBySide
            title={eventNews.title}
            css_class={eventNews.css_class}
            content={eventNews.content}
            section_title={eventNews.section_title}
            has_readmore={eventNews.has_readmore}
          />
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
