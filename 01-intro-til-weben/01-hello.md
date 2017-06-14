# Hello World

La oss lage en enkel nettside for å se hva som kreves for å bli rendret av nettleseren.
Det er vanlig å legge nye prosjekter i en _Projects_-mappe i rotmappa på maskinen, men det er opp til deg hvor du har lyst til å samle prosjektenene dine. Naviger deg hit i terminal eller Finder, og lag en ny mappe med et navn du synes passer. I klassisk intro-ånd går vi for "Hello World" på weben, så
lag en ny fil i mappen du akkurat opprettet og kall den `hello.html`.

Det første vi må gjøre i filen vår er å deklarere dokumenttypen slik at nettleseren vet hva den skal tolke innholdet som. Dette gjøres ved å starte filen med denne linjen:

`<!DOCTYPE html>`

Etter dette kan vi legge til rotelementet og strukturen for innholdet vårt:

```html
<html lang="no">
  <head></head>
  <body></body>
</html>
```

Vi har satt på attributten `lang` for å beskrive at innholdet i HTMLen skal skrives på norsk. Dessuten vil vi at nettleseren skal vise tegn som æøå riktig. Da må vi fortelle den at den skal bruke [UTF-8](https://en.wikipedia.org/wiki/UTF-8) som charset. Legg til denne linjen inni `head`-elementet:

`<meta charset="utf-8" />`

Inni `body` legger vi selve innholdet på siden. La oss legge til en overskrift og litt tekst:

```html
<h1>Hello World</h1>
<p>Min første nettside</p>
```

Hvordan ser dette nå ut? Åpne `hello.html` i Chrome og gå til neste seksjon i dette kapittelet.
