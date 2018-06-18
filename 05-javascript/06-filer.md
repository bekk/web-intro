# JavaScript-filer

Vi bruker en `script`-tag når vi legger inn JavaScript-filer i html-dokumentene våre:

```html
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8" />
    <title>En enkel HTML-side</title>
    <script type="text/javascript">
        console.log('her er mitt lille JavaScript!');
     </script>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Min første nettside</p>
    <script type="text/javascript">
        console.log('her er mitt andre lille JavaScript!');
    </script>
  </body>
</html>
```

Som regel skriver vi ikke script inne i html-filene, men har det i en egen `.js`-fil. Når dette er tilfellet importerer vi js-filene vi ønsker på denne måten:

```html
<body>
  <script type="text/javascript" src="filnavn.js"></script>
</body>
```

#### Tips

> JavaScript er som regel noe av det som tar langst tid å hente inn på en nettside. Derfor er det også greit å legge nederst i body, så alt av statisk innhold og stiler er lastet først. I tillegg må script-fila lastes _etter_ HTMLen hvis JavaScripten din skal bruke HTMLen. Dette fordi hvis scriptet lastes først, vil det ikke klare å få tak i HTML-elementene, fordi de ikke er tegnet ennå.

## Oppgaver

-   Utvid nettsiden du satte opp i kapittel 1 med scriptene over, og sjekk i consolet (DevTools) hva du får ut. Hvilket script ble kjørt først?
-   Lag en egen `.js`-fil som inneholder all JavaScripten din og importer den på siden.
