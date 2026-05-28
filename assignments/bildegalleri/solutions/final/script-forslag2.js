async function getPhotos(tag) {
    const response = await fetch('/sok?tag=' + tag);
    return await response.json();
}

const renderImages = data => data
    .map(renderOneImage)
    .join("");

const renderOneImage = img => `
    <figure class="fullwidth">
        <img src="${img.url}" />
        <figcaption>${img.title}</figcaption>
    </figure>`;

async function router() {
    const url = window.location.pathname;

    if (url == '/') {
        return;
    }

    const urlDeler = url.split('/');
    const tag = urlDeler[1];
    const bildeId = urlDeler[2];

    const photos = await getPhotos(tag);

    if (bildeId) {
        html = renderOneImage(photos[bildeId]);
    } else {
        html = renderImages(photos);
    }

    document.querySelector('main').innerHTML = html;
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const tag = event.target.querySelector('input').value;
    history.pushState(null, '', tag);
    router();
});

document.querySelector('main').addEventListener('click', function (event) {
    const parent = event.target.parentNode;

    if (parent.tagName === 'A') {
        event.preventDefault();
        const href = parent.getAttribute('href');
        history.pushState(undefined, '', href);
        router();
    }
});

window.addEventListener('popstate', router);
router();