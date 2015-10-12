ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
      url:"api/benches",
      data: {bounds},
      success: function(benches) {
        ApiActions.receiveAll(benches);
      }
    });
  },


};
