# Utviklingsmiljøet

Når man beveger seg bort fra en liten enkel html-side med en css-fil eller to og litt javascript, og over på kjempestore prosjekter som de vi gjerne jobber med oss kunde, trenger man et ordentlig utviklingsmiljø for frontenden. Kanskje man bruker de [siste standardene for EcmaScript samtidig som man må støtte IE11](/05-javascript/09-ecmascript.md). Sannsynligvis har man noen rammeverk og eksterne biblioteker man bruker. Og hadde det ikke vært digg om endringer du lagret i kodebasen ble automatisk oppdatert i nettsiden der du kjører nettsiden lokalt?

En skikkelig frontendrigg består av mange deler, og varierer også gjerne fra prosjekt til prosjekt.
Derfor kommer vi ikke til å gå så veldig i detalj på dette, men nevner heller noen sentrale konsepter som du kanskje vil komme borti.


## Bygging

Byggeprosessen er en rekke tasks, eller oppgaver om du vil, som løper over prosjektfilene dine og kompilerer koden. Man har også gjerne et byggesteg hvor man kjører tester, slik at kode som feiler ikke vil bli produksjonssatt.
Man kjører ofte bygget lokalt underveis mens man utvikler, og når man skal produksjonssette (også kalt deploye) lager byggeprosessen en produksjonsversjon av prosjektet. Deploy-versjonene er ofte [minifiserte](https://en.wikipedia.org/wiki/Minification_(programming)) versjoner av det du har kjørt lokalt, for å gjøre det som skal kjøres i nettleseren til brukerne dine så lite og raskt som mulig.

De mest populære verktøyene for implementering av en byggeprosess, er Webpack, Gulp og Grunt.

## Håndtering av avhengigheter
* Npm
* Yarn

Package.json
