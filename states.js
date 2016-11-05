var ElectoralMap = require('./lib/electoral-map');
var Baby = require('babyparse');
var fs = require('fs');
var http = require('http');

const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}
var server = http.createServer(handleRequest);

function parseStates() {
  var stateMap = {};
  var content = fs.readFileSync('states.csv', { encoding: 'binary' });
  var parsed = Baby.parse(content,{
    step: function(row) {
      var state = row.data.toString().split(',');
      if (state.length == 2) {
        stateMap[state[1]] = state[0];
        console.log('\"%s\" : \"%s\",', state[1], state[0]);
      }
    }
  });
}
//Lets start our server
server.listen(PORT, function(){
    console.log('Server listening on: http://localhost:%s', PORT);
    parseStates();
    var map = new ElectoralMap();
    ['AL', 'WY'].map(function(state) {
      map.assignTrump(state);
    });
    console.log('serialize WY:1 %s', map.serialize());
    ['AK', 'WI'].map(function(state) {
      map.assignClinton(state);
    });
    console.log('serialize WI: 2, WY:1 %s', map.serialize());
    ['CA', 'FX'].map(function(state) {
      map.assignClinton(state);
    });

    console.log('TX %d', map.getCall('TX'));
    console.log('ca %d', map.getCall('CA'));
    console.log('FX %d', map.getCall('FX'));
});
