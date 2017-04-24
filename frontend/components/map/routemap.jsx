import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';


const _getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let _mapOptions = {
  center: {lat: 40.746468, lng: -73.988546}, //Manhattan coords
  zoom: 13
};
class RouteMap extends React.Component {
  //...

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 40.746468, lng: -73.988546 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      // ...
      <div className = "GoogleMap" ref={ map => this.mapNode = map }/> // this ref gives us access to the map dom node
      // ...
    )
  }

  //...
}

export default withRouter(RouteMap);
