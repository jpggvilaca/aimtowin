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

  componentDidMount() {
    !this.props.has_readmore
      ? this.setState({ isReading: true})
      : null
  }

  render() {
    let rm = this.state.isReading
    const {
      title,
      css_class,
      content,
      section_title,
      has_readmore,
      readmore_content
    } = this.props

    const $content = <div className="info">
      <h3 className="info-title">{title}</h3>
      <p className="info-content">{content}</p>
      {has_readmore ?
        <span className="rm" onClick={this.readMore}>Ler Menos</span> : null}
    </div>

    const $readMoreContent = <div className="info readmore">
      <h3 className="info-title">{title}</h3>
      <p className="info-content">{readmore_content}</p>
      {has_readmore ? <span className="rm" onClick={this.readMore}>Ler Mais</span> : null}
    </div>

    return (
      <div className='sbs'>
        <h3 className="section-title">{section_title}</h3>
        <div className={"img-left " + css_class}></div>
        {rm ? $content : $readMoreContent}
      </div>
    )
  }
}

export default SideBySide
