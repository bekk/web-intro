# Hello World

La oss lage en enkel nettside. Det klassiske eksempelet å ta utgangspunkt i er selvfølgelig Hello World. Her skal vi se på hva som kreves av en nettside for å bli rendret av nettleseren. Start med å opprette en fil i denne mappen, og kall den `hello.html`.

Det første vi må gjøre i filen vår er å deklarere dokumenttypen slik at nettleseren vet hva den skal tolke innholdet som. Vi starter filen med denne linjen:

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

Hvordan ser dette nå ut? Hvis du åpner `hello.html` i Chrome kan vi ta en titt.
