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

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const tag = event.target.querySelector('input').value;

  getPhotos(tag).then(function(data) {
    const html = renderImages(data);
    document.querySelector('main').innerHTML = html;
  });
});
