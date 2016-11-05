
define(function (require) {
  var electoralMap = {
    "AL" : 0,
    "AK" : 0,
    "AZ" : 0,
    "AR" : 0,
    "CA" : 0,
    "CO" : 0,
    "CT" : 0,
    "DE" : 0,
    "FL" : 0,
    "GA" : 0,
    "HI" : 0,
    "ID" : 0,
    "IL" : 0,
    "IN" : 0,
    "IA" : 0,
    "KS" : 0,
    "KY" : 0,
    "LA" : 0,
    "ME" : 0,
    "MD" : 0,
    "MA" : 0,
    "MI" : 0,
    "MN" : 0,
    "MS" : 0,
    "MO" : 0,
    "MT" : 0,
    "NE" : 0,
    "NV" : 0,
    "NH" : 0,
    "NJ" : 0,
    "NM" : 0,
    "NY" : 0,
    "NC" : 0,
    "ND" : 0,
    "OH" : 0,
    "OK" : 0,
    "OR" : 0,
    "PA" : 0,
    "RI" : 0,
    "SC" : 0,
    "SD" : 0,
    "TN" : 0,
    "TX" : 0,
    "UT" : 0,
    "VT" : 0,
    "VA" : 0,
    "WA" : 0,
    "DC" : 0,
    "WV" : 0,
    "WI" : 0,
    "WY" : 0,
  };

  var clickHandler = function(event, data) {
    var value = (electoralMap[data.name] + 1) % 3;
    electoralMap[data.name] = value;
    $('#clicked-state')
    .text('You clicked: '+ data.name + ' value: ' + value);
    refreshMap(electoralMap);
 };

  function getStateStyles(statusMap) {
    var styles = {};
    for (var state in statusMap) {
      switch(statusMap[state]) {
        case 0:
          styles[state] = {fill: 'white'};
          break;
        case 1:
          styles[state] = {fill: 'red'};
          break;
        case 2:
          styles[state] = {fill: 'blue'};
          break;
      }
    }
    return styles;
  }

  function refreshMap(stateStyles) {
    // Hack-hack to refresh map
    $('#map-holder').html('');
    $('#map-holder').html('<div id="map" style="width: 350px; height: 250px;" ></div>');
    loadMap(stateStyles);
  }

  function loadMap(electionStatus) {
    var stateStyles = getStateStyles(electionStatus);
    $('#map').usmap({
      stateSpecificStyles: stateStyles,
      click: clickHandler
    });
  }

  $(document).ready(function() {
      loadMap(electoralMap);
    });
  });
