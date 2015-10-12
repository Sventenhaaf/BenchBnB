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
    },

  createMarker: function(e){
    var marker = new google.maps.Marker({
      position: {lat: 37.7, lng: -122.7},
      map: this.map,
      title: 'Hello World!'
    });
    e.preventDefault();
    BenchStore.all().forEach(function(bench){
      // debugger;
    });
  },



  render: function(){
    return (
      <div className="map" ref="map"></div>
    )
  }
});
