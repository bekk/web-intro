# Hello World

La oss lage en enkel nettside for å se hva som kreves for å bli rendret av nettleseren. Det er vanlig å legge nye prosjekter i en _Projects_-mappe \(noen foretrekker å kalle denne _dev_\) du har opprettet selv i hjemmemappa på brukeren din, men det er opp til deg hvor du har lyst til å samle prosjektene dine.

## Opprett ditt første HTML-dokument

Lag en samlemappe for dine fremtidige prosjekter, hvis du ikke har en allerde. I denne mappen kan du så lage enda en mappe som skal inneholde det vi trenger for å sette opp din første nettside, kall den _web-intro_ eller noe tilsvarende gjenkjennelig. I klassisk intro-ånd går vi for "Hello World" på weben, så lag en ny fil i _web-intro_-mappen din og kall den `index.html`.

## Definer struktur og innhold på siden

Det første vi må gjøre i filen vår er å deklarere dokumenttypen slik at nettleseren vet hva den skal tolke innholdet som. Dette gjøres ved å starte filen med denne linjen:

`<!DOCTYPE html>`

[`!DOCTYPE html`](https://www.w3.org/TR/html5/syntax.html#the-doctype) betyr at innholdet på nettsiden skal tolkes som [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5), og dokumentet blir lest i det som kalles for [standard mode](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode). Standard mode gir oss forutsigbar oppførsel fordi nettleserne ikke kan bryte med kjente webformat-spesifikasjoner når de forsøker å vise innholdet på siden din. Etter dette kan vi legge til rotelementet og strukturen for innholdet vårt:

```markup
<!DOCTYPE html>
<html lang="no">
  <head></head>
  <body></body>
</html>
```

> Rotelementet er det ytterste elementet, i kodeblokken er det `html`-elementet

Vi har satt på attributten `lang` for å beskrive at innholdet i HTMLen skal skrives på norsk, dette gjør det enklere for skjermlesere å vite hva slags språk den skal lese opp. Dessuten vil vi at nettleseren skal vise tegn som æøå riktig. Da må vi fortelle den at den skal bruke [UTF-8](https://en.wikipedia.org/wiki/UTF-8) som charset. Legg til denne linjen inni `head`-elementet:

`<meta charset="utf-8" />`

Inni `body` legger vi selve innholdet på siden. La oss legge til en overskrift og litt tekst:

```markup
<h1>Hello World</h1>
<p>Min første nettside</p>
```

Slik at vi ender opp med en fil som dette:

```markup
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Min første nettside</p>
  </body>
</html>
```

Hvordan ser dette nå ut? Åpne `index.html` i Chrome og gå til neste seksjon.
