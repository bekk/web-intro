# React

## Grunnleggende om React

React lar oss representere GUI-et som en mengde av funksjoner. Disse funksjonene kan man se på som transformasjoner som tar inn en datastruktur og returnerer en representasjon som sier noe om hvordan datastrukturen skal rendres som HTML. Det høres kanskje komplekst og vanskelig ut, men React handler egentlig bare om funksjoner som tar inn objekter som f.eks. `{ name: 'John', likesApples: true }` og returner HTML: `<div>John likes apples</div>`. Vi kaller en slik funksjon som representerer GUI-et for en _React component_ eller bare en "komponent".

En komponent kan f.eks. se slik ut:

```javascript
function MyCoolComponent() {
    return <div>Hello World</div>;
}
```

Det ser litt merkelig ut - HTML inn i JavaScripten!? Det kan umulig være riktig, eller? Kort fortalt, så kalles denne syntaksen JSX. JSX lar oss skrive komponentene våre som om de var HTML-elementer, og så vil React passe på at det blir helt vanlig HTML når programmet kjøres i nettleseren.

I likhet med funksjoner kan komponenter også ta inn ulike parametere:

```javascript
function MyCoolComponent(props) {
    return (
        <div>
            {props.name} 
            {props.likesApples 
                ? 'likes' 
                : 'dislikes'
            } apples
        </div>
    );
}
```

Vi kaller denne funksjonen som om den er et HTML-element når vi vil at den skal rendres på siden vår: `<MyCoolComponent likesApples />`

`props` er det første argumentet som sendes inn til komponenten og består av alle key-value parene som settes på komponenten. `props` settes på samme måte som du ville ha satt attributter på tradisjonelle HTML elementer:

```markup
<Component foo="bar" frontendkurs="awesome" />
```

Disse `prop`-ene vil være tigjengelig inne i React-komponenten på følgende måte:

```javascript
function Component(props) {
    console.log(props) // { foo: 'bar', fagdag: 'awesome' }
    ...
}
```

`prop`-ene må ikke være strenger. Når vi bruker krøllparanteser inne i et JSX-uttrykk, så "escaper" vi JSX-syntaksen og går inn i standard JavaScript-modus, dvs at vi kan skrive vanlig JavaScript-kode og utnytte hele språket:

```markup
<Component divisionFactor={ 2.0 } primes={ [1,2,3,5] } />
```

Komponenter kan også rendre andre komponenter:

```javascript
function MyView() {
    return (
        <div>
            <MyCoolComponent name="John" likesApples={true} />
            <MyCoolComponent name="Alice" likesApples={false} />
        </div>
    );
}

```

## Læringsressurser

{% hint style="info" %}
**Ressurser for React**:

* [Create react app](https://github.com/facebookincubator/create-react-app) er et fint sted å starte hvis vil lage en React-app. Når du kjører dette programmet, får du alt du trenger av oppsett og byggeverktøy.
* React har god dokumentasjon, blant annet [denne guiden som dekker hovedkonseptene](https://reactjs.org/docs/hello-world.html) i rammeverket
* Bekk sin egen [introduksjons-workshop om React](https://github.com/bekk/react-intro)
{% endhint %}

{% hint style="info" %}
**Ressurser for Redux**

* Redux har også god [dokumentasjon](http://redux.js.org/)
* Det finnes en bra [videoserie](https://egghead.io/courses/getting-started-with-redux) laget av mannen bak biblioteket, Dan Abramov.
{% endhint %}

{% hint style="info" %}
**Bekk Teknologiradar** har anbefalinger og generelle beskrivelser av...

* ...[React](https://radar.bekk.no/tech2018/sprak-og-rammeverk/react)
* ...[Redux](https://radar.bekk.no/tech2018/sprak-og-rammeverk/redux)
* ...[create-react-app](https://radar.bekk.no/tech2018/verktoy/create-react-app)
{% endhint %}


