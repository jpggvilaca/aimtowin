import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import GM_APIKEY from '../../config'
import mapStyles from './mapStyles'

const Place = () => {
  return (
    <div className="place">
      MESC
    </div>
  )
}

export default class Map extends Component {
  static defaultProps = {
    zoom: 11,
    center: [41.541720, -8.422543],
    scrollwheel: false,
    styles: mapStyles
  }

  render() {
    return (
      <div className="map-section">
        <h3>Localização MESC</h3>
        <GoogleMapReact
          apiKey={GM_APIKEY}
          zoom={11}
          center={{lat: 41.541720, lng: -8.422543}}
          scrollwheel={false}
          styles={mapStyles}
        >
        <Place lat={41.541720} lng={-8.411543} />
        </GoogleMapReact>
      </div>
    );
  }
}
