import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import './Map.css'
import GM_APIKEY from '../../config'
import mapStyles from './mapStyles'

const Place = () => {
  return (
    <div className="place">MESC</div>
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
          bootstrapURLKeys={{key: GM_APIKEY}}
          zoom={11}
          center={{lat: 41.541720, lng: -8.422543}}
          scrollwheel={false}
          styles={mapStyles}
        >
        <Place lat={41.541720} lng={-8.411543} />
        </GoogleMapReact>
        <div className="address">
          <h4>Informação</h4>
          <p>Morada:</p>
          <p>Parque de Exposições de Braga</p>
          <p>Av. Dr. Francisco Pires Gonçalves,</p>
          <p>4711-909 Braga</p>
          <br />
          <p>Site oficial:</p>
          <a href="http://www.investbraga.com/peb/" target="_blank">www.investbraga.com</a>
          <br/>
          <br />
          <p>Facebook:</p>
          <a href="https://www.facebook.com/pebbraga/" target="_blank">https://www.facebook.com/pebbraga/</a>
        </div>
      </div>
    );
  }
}
