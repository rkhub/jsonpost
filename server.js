var http = require('http');
var timeout = require('request-timeout');
var _    = require('underscore');
var items = [];

var onreq = function (req, res)
{
    timeout(req, res, 60)

    if(req.method == 'POST')
    {
        var body = '';
        req.on('data', function (data)
        {
            //console.log("DATA" + data);
            body += data;

        });

        req.on('end', function ()
        {
            var episodes = JSON.parse(body);
            var filteredEpisodes = [];
            if(_.isObject(episodes) && episodes.hasOwnProperty('payload')){
                _.each(episodes.payload, function(i) {
                    if((i.drm === true) && (i.episodeCount > 0)){
                        filteredEpisodes.push(_.pick(i, 'image', 'slug', 'title'));
                    }
                });
                //res.setHeader('Content-Type', 'application/json');
                res.writeHead(200, {'Content-Type': 'application/json' });
                res.end(JSON.stringify(filteredEpisodes, null, 3));
            }else{
                res.writeHead(400, {'Content-Type': 'application/json' });
                res.write('Could not decode request: JSON parsing failed');
                res.end();
            }

        });

        req.on('timeout', function() {
          console.log('The request timed out')
          res.end('The request timed out')
        });

        req.on('error', function(e) {
          console.log("test");
          res.writeHead(400, {'Content-Type': 'application/json' });
          res.write('Some Error Occured!');
          res.end();

        });

    }else{

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('No Post Occurred, Please Try again!');
    }
}
var port = process.env.PORT || 3000;
var server = http.createServer(onreq).listen(port);
console.log("listening on port " + port);

