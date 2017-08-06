function getAnnonser() {
    return fetch('/annonser').then((resp) => {
        return resp.json();
    });
}

getAnnonser().then((annonser) => {
  const annonseHtml = annonser.map((annonse) => lagAnnonseHtml(annonse));

  document.querySelector('.annonse-container').innerHTML = annonseHtml.join('');
});

function lagBilderHtml(annonse) {
    return annonse.url.map((bildeurl, index) => {
        const klasse = index > 0 ? 'hidden' : '';
        return `<img class="bilde ${klasse}" src="/${bildeurl}" alt="bilde av en annonse"/>`
    }).join('');
}

function lagAnnonseHtml(annonse) {
    return (
        `<div class="annonse">
            <div class="img-container">
                ${lagBilderHtml(annonse)}
                <a href="javascript:void(0)">
                  <img class="arrow arrow-left" src="left.png"/>
                </a>
                <a href="javascript:void(0)">
                  <img class="arrow arrow-right" src="right.png"/>
                </a>
                <span class="pris-container">
                    <span class="pris">${annonse.details.pris}</span>
                </span>
                <span class="kvm">${annonse.details.kvm}m<sup>2</sup></span>
            </div>
            <div class="details">
                <h2 class="tittel">
                    <span class="omradetittel">
                      ${annonse.details.omradetittel}
                    </span>
                    <span>${annonse.details.tittel}</span>
                    </h2>
                <p class="adr">${annonse.details.adresse}</p>
            </div>
        </div>`);
}


function vedKlikkPaaAnnonse(event) {
  const element = event.target;
  if (element.classList.contains('arrow')) {
      const imgcontainer = element.parentElement.parentElement;

      const bildeSomVises = imgcontainer.querySelector('.bilde:not(.hidden)');
      bildeSomVises.classList.add('hidden');

      if (element.classList.contains('arrow-left')) {
          let forrigeBilde = bildeSomVises.previousSibling;
          if (!forrigeBilde.classList) {
              const parent = bildeSomVises.parentNode;
              const alleBarneBilder = parent.querySelectorAll('.bilde.hidden');
              forrigeBilde = alleBarneBilder[alleBarneBilder.length - 1];
          }
          forrigeBilde.classList.remove('hidden');
      } else {
          let nesteBilde = bildeSomVises.nextSibling;
          if (!nesteBilde.classList) {
              const parent = bildeSomVises.parentNode;
              nesteBilde = parent.children[0];
          }
          nesteBilde.classList.remove('hidden');
      }
  }
}

const annonseContainer = document.querySelector('.annonse-container');
annonseContainer.addEventListener('click', vedKlikkPaaAnnonse);
