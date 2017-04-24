import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router';


const _getCoordsObj = latLng => {

  return{
  lat: latLng.lat(),
  lng: latLng.lng()
}
};

let _mapOptions = {
  center: {lat: 40.746468, lng: -73.988546}, //Manhattan coords
  zoom: 13
};
class RouteMap extends React.Component {
  //...
  constructor(props){
    super(props);
    this.addLatLng = this.addLatLng.bind(this);
  }
  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 40.746468, lng: -73.988546 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.drawRoute();
    this.map.addListener('click', this.addLatLng);
  }

  drawRoute(){
    this.poly = new google.maps.Polyline({
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 3
        });
        this.poly.setMap(this.map);
  }

  addLatLng(event) {
       var path = this.poly.getPath();

       // Because path is an MVCArray, we can simply append a new coordinate
       // and it will automatically appear.
       path.push(event.latLng);

       // Add a new marker at the new plotted point on the polyline.
       var marker = new google.maps.Marker({
         position: event.latLng,
         title: '#' + path.getLength(),
         map: this.map
       });
     }

  render() {
    return (
      // ...
      <div className = "GoogleMap" onClick ={this.addLatLng} ref={ map => this.mapNode = map }/> // this ref gives us access to the map dom node
      // ...
    )
  }

  //...
}

export default withRouter(RouteMap);
