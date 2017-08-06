function getPhotos(tag) {
  return fetch('/sok?tag=' + tag).then(function(resp) {
    return resp.json();
  });
}

function renderImages(data) {
  var html = '';

  for (var i = 0; i < data.length; i++) {
    var img = data[i];
    html += `
      <figure>
      <a href="${window.location.pathname}/${i}">
        <img src="${img.url}" />
      </a>
        <figcaption>${img.title}</figcaption>
      </figure>
    `;
  }

  return html;
}

function renderOneImage(img) {
  return `
    <figure class="fullwidth">
        <img src="${img.url}" />
        <figcaption>${img.title}</figcaption>
    </figure>
  `;
}

function router() {
  var url = window.location.pathname;

  if (url == "/") { return; }

  var urlDeler = url.split('/');
  var tag = urlDeler[1];
  var bildeId = urlDeler[2];

  getPhotos(tag).then(function(data) {
    var html;

    if (bildeId) {
      html = renderOneImage(data[bildeId]);
    } else {
      html = renderImages(data);
    }

    document.querySelector('main').innerHTML = html;
  });
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var tag = event.target.querySelector('input').value;
  history.pushState(null, '', tag);
  router();
});


window.addEventListener('popstate', router);

router();

document.querySelector('main').addEventListener('click', function(event) {
  var parent = event.target.parentNode;

  if(parent.tagName === 'A') {
    event.preventDefault();
    var href = parent.getAttribute('href');
    history.pushState(undefined, '', href);
    router();
  }
});

