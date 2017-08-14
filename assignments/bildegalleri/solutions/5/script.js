function getPhotos(tag) {
  return fetch('/sok?tag=' + tag).then(function(resp) {
    return resp.json();
  });
}

function renderImages(data) {
  let html = '';

  for (var i = 0; i < data.length; i++) {
    const img = data[i];
    html += `
      <figure>
        <img src="${img.url}" />
        <figcaption>${img.title}</figcaption>
      </figure>
    `;
  }

  return html;
}

function router() {
  const url = window.location.pathname;

  if (url == "/") { return; }

  const urlDeler = url.split('/');
  const tag = urlDeler[1];

  getPhotos(tag).then(function(data) {
    const html = renderImages(data);
    document.querySelector('main').innerHTML = html;
  });
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const tag = event.target.querySelector('input').value;
  history.pushState(null, '', tag);
  router();
});


window.addEventListener('popstate', router);

router();
