# ESNext

> * [Oversikt over hva de ulike nettleserne støtter i ES2015 \(ES6\)](http://kangax.github.io/compat-table/es6/)
> * [Oversikt over hva de ulike nettleserne støtter i ES2016+](http://kangax.github.io/compat-table/es2016plus/)

Hvert år siden 2015 har det kommet en oppdatert versjon av EcmaScript-standarden. I 2015 kom en gigantisk revisjon av JavaScript, ES2015 \(også referert til som ES6\). Alle nye standarder må implementeres av nettleserne for at en nettside med den nyeste syntaksen skal rendres riktig. Dessverre er enkelte nettlesere \(_IE_\) som har ganske lite støtte for ES2015-specen. Hvis man må støtte browsere som ikke har en js-feature du ønsker å bruke, må du [polyfille](https://en.wikipedia.org/wiki/Polyfill) eller [transpilere](https://en.wikipedia.org/wiki/Source-to-source_compiler) det som ikke er støttes, om man ikke ønsker å bruke eldre syntaks.

Vi anbefaler å bruke den sist lanserte standarden, fordi det tidvis hindrer mystisk JavaScript-oppførsel \(husk `var` fra [variabel-seksjonen](01-variabler.md)\), og ofte gjør den koden enklere å lese. Eksempelvis er det semantisk lettere å henge med på hva som skjer med en `list.includes` i stedet for `list.indexOf != -1`.

## Graceful degradation

På et eller annet tidspunkt må man bestemme seg for om det er noen nettlesere man ikke trenger å støtte. Typisk for dette er alle IE-browsere bortsett fra den siste. Men i stedet for bare å la siden krasje, se forferdelig ut eller oppføre seg uventet, kan man gi en beskjed om hva som er feil til brukeren:

```markup
<noscript>
   Nettleseren støtter ikke JavaScript. Synd for deg. Snakkes!
</noscript>
```

## Må man transpilere?

Nei! Ikke alltid :\) Kanskje du er så heldig at du slipper å bry deg om IE11. Kanskje dere bruker en eldre ES-standard. Men de som jobber med JavaScript-engines i de ulike nettleserne, oppfordrer oss til å bruke ESNext - for da kan de tilpasse implementasjonen sin til bruken, jobbe med ytelse osv.

Mikael Brevik har forvrig en god talk om at man ikke alltid trenger transpilering:

