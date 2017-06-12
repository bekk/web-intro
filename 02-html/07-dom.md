# Object Models

> **MDN**:
* [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [CSS Object Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

## Document Object Model (DOM)

DOM-en er nettleserens programmatiske representasjon av en nettside. Den er bygget opp av et node-hierarki som representerer HTML-strukturen i en objekt-orientert modell.

JavaScript kan bruke bruker DOM-en til å lese, endre og overvåke en gitt nettside. Vi kan bruke de eksponerte objektene `document` og `window` til dette. Mer om dette i [kapittel 5](../05-javascript/06-dom-apiet.md).

 DOM-en til den følgende html-siden er som vist under:
```html
<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>All About Cats</title>
    </head>
    <body>
        <h1>CATS!</h1>
        <img
            id="mainpicture"
            src="http://placekitten.com/200/300"
        />
      <p>So cute!</p>
      <ul>
          <li class="catname">Lizzie</li>
          <li class="catname">Daemon</li>
      </ul>
   </body>
</html>
```

![dom-tree](https://raw.githubusercontent.com/ewendel/frontend--bilder/master/DOM.png)

## CSS Object Model (CSSOM)

Tilsvarende har vi CSS Object Model, som lar oss manipulere CSS med JavaScript. CSSOM-en har som DOM-en en trestruktur som representerer CSS-reglene som gjelder for siden. Når nettleseren skal forstå hvilken regel som gjelder for en node vil den navigere treet fra den mest generelle regelen som treffer noden, rekursivt ned til den mest spesifikke regelen som skal brukes.

## Oppgave

* Åpne [bekk.no](https://www.bekk.no) i Chrome og åpne DevTools Console. Hent ut første element i DOM-en med tagen "header" og lagre denne til en `const`. Undersøk objektstrukturen til elementet.
* Les ut den beregnede stylingen elementet har fått i nettleseren ved å skrive dette (erstatt variabelnavnet `header` med variabelnavnet du valgte i forrige punkt): `window.getComputedStyle(header)`. Undersøk objektstrukturen og sammenlign den med det du ser når du inspiserer `header`-elementet i Elements-fanen og ser på underfanen "Computed".
