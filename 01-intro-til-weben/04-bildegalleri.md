# Repoet

I denne oppgaven skal vi bruke prekode fra repoet. Dette får du ved å kjøre kommandoen under:

`git clone https://github.com/bekk/web-intro.git`

## Oppgaven ligger under:
`assignments > bildegalleri > assignment > client`

## Fasitene finner du på:
`assignments > bildegalleri > solutions > 1 / 2 / 3 ...`
# Oppgave 1

* Gå til `bildegalleri/assignment` i en terminal
 * Kjør `npm install`
 * Kjør `npm start`

* For å se nettsiden, åpne http://localhost:5000 i en nettleser (ikke åpne html-filen rett fra filsystemet som tidligere)

* I `script.js`
 * Gjør en request mot `/sok?tag=bekk` når siden blir lastet
 * Logg ut resultatet i consollet

# Oppgave 2

* Lag en ny funksjon som heter `renderImages` som tar inn listen over bilder
* Denne funksjonen skal returnere HTML-markup
* For hvert bilde, lag en `<figure>` med `<img>` som viser bildet og en `<figcaption>` som viser tittelen
* Sett HTML-en som `renderImages` returnerer som innhold til `<main>`-elementet

```javascript
function renderImages(data) {
   let html = '';
   // bruk en for-løkke for å fylle htmlen
   // med en <figure> for hvert bilde i data
   return html;
}

function getPhotos(tag) {
   return fetch('/sok?tag=' + tag).then(function(resp) {
       return resp.json();
   });
}

getPhotos('bekk').then(function(data) {
   // console.log(data);
   const html = renderImages(data);
   // hent ut main-elementet og sett
   // innholdet til å være denne htmlen
});

```

# Oppgave 3
* Legg til media-queries nederst i CSS-filen for å:
* Minske bredden på `figure` slik at det blir plass til 2 bilder i bredden ved medium skjermer
* Vise 3 bilder i bredden ved enda bredere skjerm

# Oppgave 4

* Fortsett på løsningen fra forrige oppgave
* Legg til submit event handler på form'et
* Hent ut verdien som er skrevet inn i tekstfeltet
* Bruk verdien til å hente ut og vise de nye bildene

# Oppgave 5
* URLen i nettleseren skal oppdatere seg ved søk
    * Lag en router-funksjon som søker på det som ligger i URLen
    * I eventlisteneren for submit, oppdater URLen og kall routeren
* Skal kunne bruke frem- og tilbakeknappene i nettleseren
    * Legg til en popstate-listener som kaller routeren
* Skal kunne åpne siden rett på et søk
    * Kall router-funksjonen i det siden lastes

# Oppgave 6

* Legg en lenke rundt bildene som vises, som lenker til det man har søkt på pluss hvilket nummer bildet er.
  * F. eks. `href="/bekk/0"`, `href="/bekk/1"` osv.
* Når et bilde klikkes på, hijack eventet og bruk pushstate til å oppdatere URL
* I routeren, vis bare bildet med riktig index om det ligger en index i URL
  * Om `<figure>` får klassen `fullwidth` får bildet automatisk riktig styling.
