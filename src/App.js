import React, { Component } from 'react'
import $ from 'jquery'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import SideBySide from './components/SideBySide/SideBySide'
import Map from './components/Map/Map'

import { navigation, droneNews, eventNews } from './components/common'

class App extends Component {
  heroBannerAnimation() {
    const banner = $('.hero')

    if(banner) {
      banner.addClass('animating')
    }
  }

  scrollToHandler() {
    const links = document.getElementsByClassName('link')

    $(links).each((i, link) => {
      $(link).click(function () {
        $('html, body').animate({
            scrollTop: $('#' + navigation[i].id).offset().top - 70
        }, 1200)
      })
    })
  }

  componentDidMount() {
    this.heroBannerAnimation()
    this.scrollToHandler()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <article id="home">
            <Banner />
          </article>
          <article id="news">
            <SideBySide
              title={droneNews.title}
              css_class={droneNews.css_class}
              content={droneNews.content}
              section_title={droneNews.section_title}
              readmore_content={droneNews.readmore_content}
              has_readmore={droneNews.has_readmore}
              has_hyperlink={droneNews.has_hyperlink}
            />
          </article>
          <article id="events">
            <SideBySide
              title={eventNews.title}
              css_class={eventNews.css_class}
              content={eventNews.content}
              section_title={eventNews.section_title}
              has_readmore={eventNews.has_readmore}
            />
          </article>
          <article id="map_section">
            <Map />
          </article>
          <Footer />
        </main>
      </div>
    )
  }
}

export default App
