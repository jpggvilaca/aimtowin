import React from 'react'

import './Banner.css'

const Banner = (props) => {
  return (
    <div className={'banner ' + props.class} id={props.id}>
      {props.section_title ? <h3 className="section-title">{props.section_title}</h3> : null}
      {props.title ? <h1 dangerouslySetInnerHTML={{__html: props.title}}></h1> : null}
      {props.content ? <h3 dangerouslySetInnerHTML={{__html: props.content}}></h3> : null}
    </div>
  )
}

export default Banner
