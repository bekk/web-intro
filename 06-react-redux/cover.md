# React og Redux

## Workshop
Workshoppen som kjøres under frontendkurset finner du [her](https://github.com/ewendel/redux-workshop)

## Basic React
React lar oss representere GUI-et som en mengde av funksjoner. Disse funksjonene kan man se på som transformasjoner som tar inn en datastruktur og returnerer en representasjon som sier noe om hvordan datastrukturen skal rendres som HTML. Det høres kanskje komplekst og vanskelig ut, men React handler egentlig bare om funksjoner. Funksjoner som tar inn objekter som f.eks. `{ name: 'John', likesApples: true }` og returner HTML: `<div>John likes apples</div>`. Vi kaller en slik funksjon som representerer GUI-et for en "React komponent" eller bare en "komponent". 

En komponent kan f.eks se slik ut:

```javascript
function MyCoolComponent() {
    return <div>Hello World</div>
}
```

Det ser litt merkelig ut - HTML inn i JavaScript-en!? Det kan umulig være riktig, eller?
Kort fortalt, så kalles denne syntaksen JSX. JSX lar oss "transpilere" (transformere) noe som ser ut som HTML om til noe som React vil rendre som HTML når programmet kjøres i nettlseren.

I likhet med funksjoner kan komponenter også ta inn ulike parametere:

```javascript
function MyCoolComponent(props) {
    return <div>{props.name} {props.likesApples? 'likes' : 'dislikes'} apples</div>
}
```

`props` er det første argumentet som sendes inn til komponenten og består av alle key-value parene som settes på komponenten. `props` settes på samme måte som du ville ha lagt attributter på tradisjonelle HTML elementer:
```html
<Component foo="bar" frontendkurs="awesome" />
```

Disse `prop`-ene vil være tigjengelig inne i React-komponenten på følgende måte:

```javascript
function Component(props) {
    console.log(props) // { foo: 'bar', fagdag: 'awesome' }
    ...
}
```

`prop`-ene må ikke være strenger. Når vi bruker krøllparanteser inne i en JSX-uttrykket, så "escaper" vi JSX-syntaksen og går inn i standard JavaScript-modus, dvs at vi kan skrive vanlig JavaScript-kode og utnytte språket:
```html
<Component divisionFactor={ 2.0 } primes={ [1,2,3,5] } />
```

Komponenter kan også rendre andre komponenter:

```javascript
function MyView() {
    return <div>
            <MyCoolComponent name="John" likesApples={true} />
            <MyCoolComponent name="Alice" likesApples={false} />
          </div>;
}
```

## Ressurser

### React
[Create react app](https://github.com/facebookincubator/create-react-app)
er et fint sted å starte hvis vil lage en React-app. Når du kjører dette programmet, får du alt du trenger av oppsett og byggeverktøy for en SPA.

Create react app gir deg et utviklingsmiljø ut av boksen, og oppstartsguiden nevner ulike verktøy som yarn og npm. Hvordan dette henger sammen og kan brukes kan du lese mer om i [seksjonen om utviklingsmiljø]().

### Redux
Redux har en veldig god [dokumentasjon](http://redux.js.org/), det finnes også en god [videoserie](https://egghead.io/courses/getting-started-with-redux) laget av mannen bak biblioteket, Dan Abramov.  


