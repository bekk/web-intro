# Filer

Vi bruker en `script`-tag når vi legger inn JavaScript-filer i html-dokumentene våre:

```markup
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

```markup
<body>
  <script type="text/javascript" src="filnavn.js"></script>
</body>
```

{% hint style="info" %}
**Tips!**

JavaScript er som regel noe av det som tar langst tid å hente inn på en nettside. Derfor er det også greit å legge nederst i body, så alt av statisk innhold og stiler er lastet først. I tillegg må script-fila lastes _etter_ HTMLen hvis JavaScripten din skal bruke HTMLen. Dette fordi hvis scriptet lastes først, vil det ikke klare å få tak i HTML-elementene, fordi de ikke er tegnet ennå.
{% endhint %}

## Oppgaver

* Utvid nettsiden du satte opp i [del 1](../cover/) med de to scriptene i det øverste kodeeksempelet på denne siden og sjekk i consolet \(DevTools\) hva du får ut. Hvilket script ble kjørt først?
* Lag en egen `.js`-fil som inneholder en egen console.log, og importer det på siden. **Obs!** Husk å importere det nederst i `body`, så vi kan få tak i HTML-elementene på siden fra JavaScripten \(les tipset over for å skjønne hvorfor\)

