var fs = require('fs');
var http = require('http');
var path = require('path');
var url = require('url');

var defaultSiteRoot = path.join(__dirname, '..', 'client');
var solutionSiteRoot1 = path.join(__dirname, '..', '..', 'solutions');
var annonserRoot = path.join(__dirname, '..', '..', 'annonser');
var imgRoot = path.join(__dirname, '..', '..', 'img');

function getAnnonser() {
    return new Promise(function (resolve, reject) {
        var resultatAnnonser = [];
        fs.readdir(annonserRoot, function (error, filename) {
            if (error) {
                throw error
            }
            var bildefiler = filename.filter(function (filnavn) {
                return filnavn.indexOf("annonse") > -1;
            });

            bildefiler.forEach(function (annonsefil, index) {
                fs.readdir(path.join(annonserRoot, annonsefil), function (error, subfil) {
                    var bildeUrl = subfil.filter(function (filnavn) {
                        return filnavn.indexOf("jpg") > -1;
                    }).map(function (bildefil) {
                        return annonsefil + "/" + bildefil;
                    });

                    resultatAnnonser[index] = {
                        url: bildeUrl,
                        details: require('../../annonser/' + annonsefil + '/details')
                    };

                    if(index === bildefiler.length -1) {
                        resolve(resultatAnnonser);
                    }
                });
            });
        });
    });
}

function handleRequest(siteRoot, request, response) {
    if (/^\/annonser/.test(request.url)) {
        getAnnonser().then(function(annonser) {
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify(annonser));
            response.end();
        });
    } else {
        var filePath = path.join(siteRoot, request.url);

        if(request.url.indexOf("annonse") > -1) {
         filePath = path.join(annonserRoot, request.url);
        } else if(/.png|.jpg|.PNG|.JPG/.test(request.url)){
            filePath = path.join(imgRoot, request.url);
        }

        var fallbackPath = path.join(siteRoot, 'index.html');

        fs.stat(filePath, (err, stat) => {
            if (err || !stat.isFile()) {
                filePath = fallbackPath;
            }
            fs.createReadStream(filePath).pipe(response);
        });
    }
}

http.createServer(handleRequest.bind(null, defaultSiteRoot)).listen(6001);
http.createServer(handleRequest.bind(null, solutionSiteRoot1)).listen(6002);

console.log('Server started on http://localhost:6001');
