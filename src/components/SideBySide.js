import React, { Component } from 'react'

import './SideBySide.css'

class SideBySide extends Component {
  constructor() {
    super()

    this.state = {
      isReading: false
    }

    this.readMore = this.readMore.bind(this)
  }

  readMore() {
    this.setState({ isReading: !this.state.isReading})
  }

  render() {
    let rm = this.state.isReading
    const { title, css_class, content, readmore_content } = this.props

    console.log(rm);

    const $content = <div className="info">
      <h3 className="info-title">{title}</h3>
      <p className="info-content">{content}</p>
      <span className="rm" onClick={this.readMore}>Ler Menos</span>
    </div>

    const $readMoreContent = <div className="info readmore">
      <h3 className="info-title">{title}</h3>
      <p className="info-content">{readmore_content}</p>
      <span className="rm" onClick={this.readMore}>Ler Mais</span>
    </div>

    return (
      <div className='sbs'>
        <div className={"img-left " + css_class}></div>
        {rm ? $content : $readMoreContent}
      </div>
    )
  }
}

export default SideBySide
