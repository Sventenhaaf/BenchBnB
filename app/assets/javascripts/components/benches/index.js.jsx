window.Index = React.createClass({
  getInitialState: function(){
    return { benches: BenchStore.all()};
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function(){
    BenchStore.addChangeListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  render: function () {
    return(
      <div>
        {this.state.benches}
      </div>
    );
  }
});
