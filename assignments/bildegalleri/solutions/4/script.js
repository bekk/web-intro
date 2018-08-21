async function getPhotos(tag) {
    const response = await fetch('/sok?tag=' + tag);
    return await response.json();
}

function renderImages(data) {
    let html = '';

    for (let i = 0; i < data.length; i++) {
        let img = data[i];
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
