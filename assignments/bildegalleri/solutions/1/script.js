async function getPhotos(tag) {
    const response = await fetch('/sok?tag=' + tag);
    return await response.json();
}

getPhotos('bekk').then(function (data) {
    console.log(data);
});
