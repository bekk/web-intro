async function getPhotos(tag) {
    const response = await fetch('/sok?tag=' + tag);
    return await response.json();
}

const renderImages = images =>
    images.map(
        img => `
            <figure>
                <img src="${img.url}" />
                <figcaption>${img.title}</figcaption>
            </figure>`
    );

getPhotos('bekk').then(function (data) {
    const html = renderImages(data).join('');
    document.querySelector('main').innerHTML = html;
});
