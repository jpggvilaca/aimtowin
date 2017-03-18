import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import GM_APIKEY from '../config'

export default class Map extends Component {
  static defaultProps = {
    center: {lat: 41.536735, lng: -8.627864},
    zoom: 11
  };

  render() {
    return (
      <div className="map-section">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          options={
            { scrollwheel: false }
          }
          bootstrapURLKeys={{
            key: GM_APIKEY,
            language: 'pt'
          }}
        />
      </div>
    );
  }
}
