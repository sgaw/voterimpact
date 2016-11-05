var http = require('http');
var dispatcher = require('httpdispatcher');
var Baby = require('babyparse');
var fs = require('fs');

const PORT=8080;

function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{"result": "Success"}');
});

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  var stateMap = {};
  var content = fs.readFileSync('states.csv', { encoding: 'binary' });
  var parsed = Baby.parse(content,{
    step: function(row) {
      var state = row.data.toString().split(',');
      if (state.length == 2) {
        stateMap[state[1]] = state[0];
      }
    }
  });
  var states = [];
  for (var abbr in stateMap) {
    states.push(abbr);
    console.log("state abbr: %s", abbr);
  }
  console.log("Server listening on: http://localhost:%s", PORT);
});
