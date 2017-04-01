import React, { Component } from 'react'
import $ from 'jquery'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import SideBySide from './components/SideBySide/SideBySide'
import Map from './components/Map/Map'
import Waypoint from 'react-waypoint'

import { navigation, droneNews, eventNews } from './components/common'

class App extends Component {
  Animations() {
    const banner = $('.hero')

    if(banner) {
      banner.addClass('animating')
    }
  }

  _handleEnter({ previousPosition, currentPosition, event }) {
    $('.img-left').addClass('opacity-animation')
    $('.sbs .info').addClass('comeup-animation')
  }

  scrollToHandler() {
    const links = document.getElementsByClassName('link')

    $(links).each((i, link) => {
      $(link).click(() => {
        $('html, body').animate({
            scrollTop: $('#' + navigation[i].id).offset().top - 70
        }, 1200)
      })
    })
  }

  scrollDown() {
    const sdown = $('.scrolldown')

    sdown.on('click', () => {
      $('html, body').animate({
          scrollTop: $('#news').offset().top - 70
      }, 900)
    })
  }

  componentDidMount() {
    this.Animations()
    this.scrollToHandler()
    this.scrollDown()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <article id="home">
            <Banner />
          </article>
          <Waypoint topOffset={500} onEnter={this._handleEnter}>
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
          </Waypoint>
          <article id="events">
            <SideBySide
              title={eventNews.title}
              css_class={eventNews.css_class}
              content={eventNews.readmore_content}
              section_title={eventNews.section_title}
              has_readmore={eventNews.has_readmore}
              readmore_content={eventNews.content}
            />
          </article>
          <article id="sponsors">
            <div className="sponsors">
              <h3>Patrocinadores</h3>
              <div>
              <ul>
                <li>
                  <a className="ipca_logo" href="http://www.ipca.pt/"></a>
                </li>
                <li>
                  <a className="camara_logo" href="https://www.cm-braga.pt/pt"></a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="invest_logo" href="http://investbraga.com/index/index.php"></a>
                </li>
                <li>
                  <a className="aiminho_logo" href="http://www.aiminho.pt/"></a>
                </li>
              </ul>
              </div>
            </div>
          </article>
          <article id="location">
            <Map />
          </article>
          <Footer />
        </main>
      </div>
    )
  }
}

export default App
