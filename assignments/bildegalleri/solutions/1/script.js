function getPhotos(tag) {
  return fetch('/sok?tag=' + tag).then(function(resp) {
    return resp.json();
  });
}

getPhotos('bekk').then(function(data) {
  console.log(data);
});
