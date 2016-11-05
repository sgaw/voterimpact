var http = require('http');
var url = require('url');
var dispatcher = require('httpdispatcher');
var ElectoralMap = require('./lib/electoral-map');

const PORT=8080;

if (!String.prototype.formatUnicorn) {
    String.prototype.formatUnicorn = function() {
        var str = this.toString();
        if (!arguments.length)
            return str;
        var args = typeof arguments[0],
            args = (("string" == args || "number" == args) ? arguments : arguments[0]);
        for (arg in args)
            str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), args[arg]);
        return str;
    }
}

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

dispatcher.onGet("/query", function(req, res) {
    var queryObject = url.parse(req.url,true).query;
    console.log(queryObject['trumpStates']);
    var electoralMap = new ElectoralMap();
    var trumpStates = [];
    if ('trumpStates' in queryObject) {
      trumpStates = queryObject['trumpStates'].split(',');
    }
    var clintonStates = [];
    if ('clintonStates' in queryObject) {
      clintonStates = queryObject['clintonStates'].split(',');
    }
    trumpStates.map(function(state) {
      electoralMap.assignTrump(state);
    });
    clintonStates.map(function(state) {
      electoralMap.assignClinton(state);
    });

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end('{ "key" : "{value}"}'.formatUnicorn({
      'value': electoralMap.serialize()
    }));
});

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
