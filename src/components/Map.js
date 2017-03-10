import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
        />
      </div>
    );
  }
}
