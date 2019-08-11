# Utviklingsmiljø

Når man beveger seg bort fra en liten enkel html-side med en css-fil eller to og litt javascript, og over på kjempestore prosjekter som de vi gjerne jobber med hos kunder, trenger man et ordentlig utviklingsmiljø for frontenden. Kanskje man bruker de [siste standardene for EcmaScript samtidig som man må støtte IE11](../cover-3/10-ecmascript.md). Sannsynligvis har man noen rammeverk og eksterne biblioteker man bruker. Og hadde det ikke vært digg om endringer du lagret i kodebasen ble automatisk oppdatert i nettsiden der du kjører nettsiden lokalt?

En skikkelig frontendrigg består av mange deler, og varierer også gjerne fra prosjekt til prosjekt. Derfor kommer vi ikke til å gå så veldig i detalj på dette, men nevner heller noen sentrale konsepter som du kanskje vil komme borti.

## Bygging

Byggeprosessen er en rekke tasks, eller oppgaver om du vil, som løper over prosjektfilene dine og kompilerer koden. Man har også gjerne et byggesteg hvor man kjører tester, slik at kode som feiler ikke vil bli produksjonssatt. Man kjører ofte bygget lokalt underveis mens man utvikler, og når man skal produksjonssette \(også kalt deploye\) lager byggeprosessen en produksjonsversjon av prosjektet. Deploy-versjonene er ofte [minifiserte](https://en.wikipedia.org/wiki/Minification_%28programming%29) versjoner av det du har kjørt lokalt, for å gjøre det som skal kjøres i nettleseren til brukerne dine så lite og raskt som mulig.

De mest populære verktøyene for implementering av en byggeprosess er Webpack, Gulp og Grunt.

## Håndtering av avhengigheter

Alle avhengigheter, det vil si verktøy, rammeverk og biblioteker vi har lyst til å bruke i utviklingsprosessen, må håndteres på en eller annen måte. De to vanligste pakkehåndtererne \(package managers\) vi bruker å gjøre dette med, er [npm](https://www.npmjs.com/) og [yarn](https://yarnpkg.com/lang/en/).

Filen `package.json` brukes til å spesifisere hvilke avhengigheter vi har, og kan skille på hva vi bare vil ha i utviklingsmiljøet og hva vi vil ha i produksjon. [Linteverktøy](../cover-7/linting.md) er for eksempel avhengigheter vi bare har lyst på i utviklingsmiljøet.

Hvis du setter opp en enkel React-app med [Create react app](https://github.com/facebookincubator/create-react-app), kan du se at den setter opp en rekke avhengigheter for deg, slik at du har et lite byggmiljø du kan bruke til å utvikle appen din i.

