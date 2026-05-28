# Web-APIer

> * [Web services](https://en.wikipedia.org/wiki/Web_service)
> * [Web API](https://en.wikipedia.org/wiki/Web_API)
> * [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)

Et API \(Application Programming interface\) kan ses på som en slags kontrakt for informasjonsutveksling mellom programmer eller software-komponenter. Hvis vi vil lage en nettside som skal vise informasjon fra en database, eller sende inn et skjema som skal lagres i et annet system, bruker vi en API-standard kalt web services. Web services er en tjeneste som lar programmer kommunisere over World Wide Web, gjerne gjennom Web-APIer. I stor grad bruker vi i dag RESTfulle APIer. Kjært barn har nemlig mange navn: REST, WebAPI, eller bare API. Typisk lager vi web-APIer for å kommunisere mellom klienten, f.eks. en nettside, og serveren der tjenester i backend er eksponert. APIer knytter med andre ord frontenden sammen med backenden ❤️

## REST og http

REST står for representational state transfer, og beskriver en arkitektur eller stil for kommunikasjon gjennom web-APIer. Det innebærer at oppslag bruker `GET`-forespørsler, mens `PUT`, `POST` og `DELETE` brukes til å endre, opprette og slette data over http.

## JSON

Når vi sender og mottar data fra et web-api, pleier det å skje i form av JSON, som vi deretter parser til JavaScript. JSON står for JavaScript Object Notation, og er en syntaks for å serialisere objekter, arrayer, tall, strenger, boolske verdier og null. Det ser ganske likt ut som et JavaScript-objekt, men [er ikke det samme](http://timelessrepo.com/json-isnt-a-javascript-subset). Det formateres som følger:

```javascript
{
    "string": "en string",
    "key2": 1.2,
    "boolean": false,
    "array": [1, 2, 3, 4, 5, 6],
    "object": {
        "key": "value"
    },
    "empty": null
}
```

Til sammenlikning ser et JavaScript-objekt ut som dette:

```javascript
{
  string: "en string",
  key2: 1.2,
  boolean: false,
  array: [1, 2, 3, 4, 5, 6],
  object: {
    key: "value"
  },
  empty: undefined
}
```

Vi kan parse fra JSON til JavaScript og motsatt med de følgende funksjonskallene:

```javascript
// Fra JSON til JS
JSON.parse('{"key":"value"}'); // {key: "value"}
```

```javascript
// Fra JS til JSON
JSON.stringify({ key: 'value' }); // '{"key": "value"}'
```

## Oppgaver

* Åpne inspectoren \(DevTools\) i chrome på en hvilken som helst nettside og gå til nettverk-fanen. Refresh siden og titt på hvilke kall som går. Er det bare `GET`, eller også en og annen `POST`? Trykk deg gjerne inn på kallene og undersøk hvordan headerne, preview og eventuell respons ser ut.

