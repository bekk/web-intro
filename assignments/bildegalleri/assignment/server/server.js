const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const qs = require('querystring');

const Flickr = require('node-flickr');

const flickr = new Flickr({'api_key': 'ea97a6690f90a628b60e2fd79012c74c'});

const defaultSiteRoot = path.join(__dirname, '..', 'client');
const solutionSiteRoot1 = path.join(__dirname, '..', '..', 'solutions', '1');
const solutionSiteRoot2 = path.join(__dirname, '..', '..', 'solutions', '2');
const solutionSiteRoot3 = path.join(__dirname, '..', '..', 'solutions', '3');
const solutionSiteRoot4 = path.join(__dirname, '..', '..', 'solutions', '4');
const solutionSiteRoot5 = path.join(__dirname, '..', '..', 'solutions', '5');
const solutionSiteRoot6 = path.join(__dirname, '..', '..', 'solutions', 'final');
const flickerCache = {};

function fetchFlickerContent(tag) {
  return new Promise(function(resolve, reject) {
    flickr.get('photos.search', {'tags': tag, 'per_page': 15}, function(err, result) {
      err ? reject(err) : resolve(result);
    });
  });
}

function getFlickerContent(tag) {
  if(flickerCache[tag]) {
    return Promise.resolve(flickerCache[tag]);
  } else {
    return fetchFlickerContent(tag).then(content => flickerCache[tag] = content);
  }
}

function transformResult(result) {
  return result.photos.photo.map(function(r) {
    return {
      url: `https://farm${r.farm}.staticflickr.com/${r.server}/${r.id}_${r.secret}.jpg`,
      title: r.title
    };
  });
}

function handleError(err, response) {
  console.error(err);

  response.statusCode = 500;
  response.write(err);
  response.end();
}

function handleRequest(siteRoot, request, response) {

  if(/^\/sok\?/.test(request.url)) {
    const tag = url.parse(request.url, true).query.tag;

    getFlickerContent(tag)
      .then(transformResult)
      .then(function(result) {
        response.setHeader('Content-Type', 'application/json');
        response.write(JSON.stringify(result));
        response.end();
      })
      .catch(err => handleError(err, response));

  } else {

    let filePath = path.join(siteRoot, request.url);
    const fallbackPath = path.join(siteRoot, 'index.html');

    fs.stat(filePath, (err, stat) => {
      if(err || !stat.isFile()) {
        filePath = fallbackPath;
      }
      fs.createReadStream(filePath).pipe(response);
    });
  }
}

http.createServer(handleRequest.bind(null, defaultSiteRoot)).listen(5000);
http.createServer(handleRequest.bind(null, solutionSiteRoot1)).listen(5001);
http.createServer(handleRequest.bind(null, solutionSiteRoot2)).listen(5002);
http.createServer(handleRequest.bind(null, solutionSiteRoot3)).listen(5003);
http.createServer(handleRequest.bind(null, solutionSiteRoot4)).listen(5004);
http.createServer(handleRequest.bind(null, solutionSiteRoot5)).listen(5005);
http.createServer(handleRequest.bind(null, solutionSiteRoot6)).listen(5006);

console.log('Server started on http://localhost:5000');
