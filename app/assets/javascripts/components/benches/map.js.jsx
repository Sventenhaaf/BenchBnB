window.Map = React.createClass({
  // _onChange: function () {
  //   this.setState({ benches: BenchStore.all() });
  // },

  componentDidMount: function(){

      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(map, mapOptions);
      this.map.addListener('idle', this.idleHandler);
      this.map.addListener('click', this.createMarkers);
    },

    idleHandler: function(){
      var LatLngBounds = this.map.getBounds();
      var NorthEast = LatLngBounds.getNorthEast();
      var SouthWest = LatLngBounds.getSouthWest();
      var bounds = {
        "northEast": {"lat": NorthEast.lat(), "lng": NorthEast.lng()},
        "southWest": {"lat": SouthWest.lat(), "lng": SouthWest.lng()}
      };
      console.log(bounds);

      ApiUtil.fetchBenches(bounds);
      console.log(BenchStore.all());
    },



  createMarkers: function(e){
    var that = this;
    BenchStore.all().forEach(function(bench){
      var marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: that.map,
        title: 'Hello World!'
      });
    });
    // e.preventDefault();
  },

  render: function(){


    // createMarker: function(e){
    //   var marker = new google.maps.Marker({
    //     position: {lat: 37.77, lng: -122.43},
    //     map: this.map,
    //     title: 'Hello World!'
    //   });
    //   var marker = new google.maps.Marker({
    //     position: {lat: 37.76, lng: -122.44},
    //     map: this.map,
    //     title: 'Hello World!'
    //   });
    //   e.preventDefault();
    //   BenchStore.all().forEach(function(bench){
    //   });
    // },


    return (
      <div onClick={this.createMarkers} onIdle={this.idle} className="map" ref="map"></div>
    )
  }
});
