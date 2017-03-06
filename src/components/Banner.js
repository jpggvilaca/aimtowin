import React from 'react'

const Banner = (props) => {
  return (
    <div className={'banner ' + props.class} id={props.id}>
      {props.title ? <h1 dangerouslySetInnerHTML={{__html: props.title}}></h1> : null}
      {props.content ? <h3 dangerouslySetInnerHTML={{__html: props.content}}></h3> : null}
    </div>
  )
}

export default Banner
