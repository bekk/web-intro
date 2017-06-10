# Document Object Model og CSS Object Model

> **MDN-dokumentasjon**:
* [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [CSS Object Model](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model)

DOM-en er nettleserens programmatiske representasjon av en nettside, som du kan manipulere f.eks. ved hjelp av JavaScript. DOM-en er bygget opp av et node-hierarki som representerer HTML-strukturen i en objekt-orientert modell.

DOM-en er nettsiderepresentasjonen som JavaScript bruker for å lese, endre og overvåke nettsiden. Vi kan bruke de eksponerte objektene `document` og `window` til dette. Mer om dette i [kapittel 5](../05-javascript/dom-apiet.md).

Tilsvarende har vi CSS Object Model, som lar oss manipulere CSS med JavaScript. CSSOM-en har som DOM-en en trestruktur som representerer CSS-reglene som gjelder for siden. Når nettleseren skal forstå hvilken regel som gjelder for en node vil den navigere treet fra den mest generelle regelen som treffer noden, rekursivt ned til den mest spesifikke regelen som skal brukes.

## Oppgave

* Åpne [bekk.no](https://www.bekk.no) i Chrome og åpne DevTools Console. Hent ut første element i DOM-en med tagen "header" og lagre denne til en `const`. Undersøk objektstrukturen til elementet.
* Les ut den beregnede stylingen elementet har fått i nettleseren ved å skrive dette (erstatt variabelnavnet `header` med variabelnavnet du valgte i forrige punkt): `window.getComputedStyle(header)`. Undersøk objektstrukturen og sammenlign den med det du ser når du inspiserer `header`-elementet i Elements-fanen og ser på underfanen "Computed".
