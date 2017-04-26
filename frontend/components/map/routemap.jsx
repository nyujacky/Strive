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
  zoom: 13,
  clickableIcons: false
};
class RouteMap extends React.Component {
  //...
  constructor(props){
    super(props);
    this.addLatLng = this.addLatLng.bind(this);
    this.drawRoute = this.drawRoute.bind(this);
    this.state ={
      path: ""

    }
  }
  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 40.746468, lng: -73.988546 }, // this is SF
      zoom: 13,
      clickableIcons: false
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
          strokeWeight: 3,
          editable: true
        });
        this.poly.setMap(this.map);
  }
  // componentDidUpdate(){
  //   if(this.state.currentpoly != this.path){
  //     this.setState({currentpoly: this.path});
  //     this.props.updatePolyLine(this.path);
  //
  //   }
  //
  // }
  clearPolyline(){
    this.poly.setMap(null);
  }
  addLatLng(event) {
       this.state.path = this.poly.getPath();
      //  debugger
      // //  // Because path is an MVCArray, we can simply append a new coordinate
      // //  // and it will automatically appear.
      if (event.latLng){
       this.state.path.push(event.latLng);
       this.props.updatePolyLine(google.maps.geometry.encoding.encodePath(this.state.path));
      }

       // Add a new marker at the new plotted point on the polyline.
      //  var marker = new google.maps.Marker({
      //    position: event.latLng,
      //   //  title: '#' + path.getLength(),
      //    map: this.map
      //  });
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
