import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import './Map.css'
import GM_APIKEY from '../../config'
import mapStyles, { mapStylesTwo } from './mapStyles'

const Place = () => {
  return (
    <div className="place">MESC</div>
  )
}

export default class Map extends Component {
  createMapOptions(maps) {
    return {
      // mapTypeControl: false,
      scrollwheel: false,
      zoom: 11,
      center: [41.541720, -8.422543],
      styles: mapStylesTwo
    }
  }

  render() {
    return (
      <div className="map-section">
        <h3>Localização MESC</h3>
        <GoogleMapReact
          bootstrapURLKeys={{key: GM_APIKEY}}
          options={this.createMapOptions}
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
          <a href="http://www.idroneexperience.com/" target="_blank">www.idroneexperience.com</a>
          <br/>
          <br />
          <p>Facebook:</p>
          <a href="https://www.facebook.com/IDroneExperience/" target="_blank">facebook.com/IDroneExperience</a>
        </div>
      </div>
    );
  }
}
