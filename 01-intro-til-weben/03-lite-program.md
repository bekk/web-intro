# Et lite program

I denne oppgaven skal du lage et lite grensesnitt som ser ut som en kalkulator. Grensesnittet bygges opp av HTML og styles med CSS, og til slutt bruker vi JavaScript til å få den til å fungere som en nedteller.

Hvis du alternativt vil programmere den som en faktisk kalkulator, må du gjerne gjøre det også.

## Sett opp nedtelleren
* Ta utgangspunkt i HTMLen og CSSen i `nedteller`-mappa under `assignments` i dette [repoet](https://github.com/bekk/web-intro)
* Gi `main`-elementet en bredde og midtstill det.
* Midtstill teksten til telleren.
* Bruk flexbox på beholderen med alle knappene for å få dem til å ligge som vist på bildet under.

#### Farger:
> * Gråfarge: #262626
* Rødfarge: #fd5158


<div style="width:27em;">
  <img src="../resources/nedteller.png" />
</div>

## Style element state på nedtelleren
* Midtstill og style start-knappen.
* Endre bakgrunnsfarge på knappene ved hover
* Legg til fokusmarkering for tabbing
* Endre musepeker til en hånd ved hover

## Bruk JavaScript til å interagere med nedtelleren
Dere skal gjøre nedtelleren interaktiv!

* Lag en JavaScript-fil som du inkluderer nederst i `<body>` i HTMLen din.
* Legg til en klikk-listener på .buttons
* Om en knapp ble trykket på, legg til verdien til knappen i output

#### Hint
> Husk hvordan man la til event listeners på en knapp:
```html
<button id="btn">Knapp</button>
```
```js
  const button = document.querySelector('#btn');
  button.addEventListener('click', function() {
    console.log('heia');
  });
```

#### Hint
>Man trenger ikke å legge på event listener på hver eneste knapp, i stedet kan vi benytte oss av noe som heter event propagation: Et klikk på et element vil boble opp og trigge event på elementene over. Med følgende kodesnutt kan du logge typen element som har trigget et event.
```js
const container = document.querySelector('.buttons');
container.addEventListener('click', function(event) {
  const element = event.target;
  console.log(element.nodeName) // => BUTTON eller DIV
});
```

## Implementer nedtelling

* Starte nedtelling fra tallet i nedtelleren når du trykker på start
* Stoppe nedtelling når tallet kommer til null

#### Hint
>```js
function enFunksjon() {
  console.log('Jeg printer til konsollet');
}
var id = setInterval(enFunksjon, 1000);
clearInterval(id);
```
