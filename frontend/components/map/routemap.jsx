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
    this.addPoint = this.addPoint.bind(this);
    this.addDirection = this.addDirection.bind(this);
    this.state ={
      path: "",
      markers: []
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
    // this.drawRoute();
    // this.map.addListener('click', this.addLatLng);
    this.map.addListener('click', this.addDirection);
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
       debugger
      }

       // Add a new marker at the new plotted point on the polyline.
      //  var marker = new google.maps.Marker({
      //    position: event.latLng,
      //   //  title: '#' + path.getLength(),
      //    map: this.map
      //  });
     }

     addPoint(event) {
          // this.state.path = this.poly.getPath();
          let directionsDisplay = new google.maps.DirectionsRenderer({map: this.map, suppressMarkers: true});
          let directionsService = new google.maps.DirectionsService;
          let marker = new google.maps.Marker ({
              position: event.latLng,
              map: this.map,
              draggable: true
            });
          // debugger
         // //  // Because path is an MVCArray, we can simply append a new coordinate
         // //  // and it will automatically appear.
         if (event.latLng){
          // this.state.path.push(event.latLng);
          this.state.markerArray.push(marker);
          // this.state.markerArray.push(event.latLng);
          if (this.state.markerArray.length > 1){
            // debugger
            // this.drawPoint(this.state.markerArray[this.state.markerArray.length-2], this.state.markerArray[this.state.markerArray.length-1],directionsService, directionsDisplay,this);
          }
         }
        }

    addDirection(event) {
         // this.state.path = this.poly.getPath();
         let marker = new google.maps.Marker ({
             position: event.latLng,
             map: this.map,
             draggable: true
           });
         // debugger
        // //  // Because path is an MVCArray, we can simply append a new coordinate
        // //  // and it will automatically appear.
        if (event.latLng){
          // debugger
         // this.state.path.push(event.latLng);
         this.state.markers.push(marker);
         // this.state.markerArray.push(event.latLng);
         if (this.state.markers.length > 1){
          //  debugger
           // this.drawPoint(this.state.markerArray[this.state.markerArray.length-2], this.state.markerArray[this.state.markerArray.length-1],directionsService, directionsDisplay,this);
           this.setDirections(this.map, this.state.markers, this);
         }
        }
       }
    setDirections(map, markers, that){
      let origin = markers[0];
      let waypoints = markers.slice(1, -1).map((marker) => {
        return {location: marker.position, stopover: true};
      });
      let destination = markers[markers.length-1];
      // debugger
      that.directionsDisplay = new google.maps.DirectionsRenderer({map: that.map, suppressMarkers: true});
      that.directionsService = new google.maps.DirectionsService;
      that.directionsService.route({
          origin: origin.position,
          destination: destination.position,
          waypoints: waypoints,
          travelMode: "WALKING"
          },
          function(directionsResult, status) {

          if (status === 'OK') {
            that.directionsResult = directionsResult;
            // that.renderStartEndMarkers();

            that.directionsDisplay.setDirections(directionsResult);
            that.state.path = directionsResult.routes[0].overview_polyline;
            that.props.updatePolyLine(that.state.path);
            // debugger
            that.props.updateDistance(that.totalDistance(directionsResult));

          } else {
            window.alert("Directions request failed due to " + status);
            that.markers = that.markers.slice(0,-2);
          }
        });

    }


    totalDistance (directionsResult) {
    let sum = 0;
    // debugger
    directionsResult.routes[0].legs.forEach( (leg) => {
      sum += leg.distance.value; //in meters
    });

    return +((sum/1609.34).toFixed(2)); // round to 2 decimal places in miles
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
