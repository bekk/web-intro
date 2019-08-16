# Rammeverk

I JavaScript-verdenen finnes det en haug med rammeverk for ulike formål. Noen av de mest populære rammeverkene vi ser i bransjen akkurat nå er React, Vue og Angular. I tillegg er TypeScript, og i mindre grad Flow, populære for dem som ønsker å begrense JavaScript til i større grad å bruke statiske typer. I Bekk bruker vi gjerne React på nye prosjekter, og på [teknologiradaren for 2018](https://radar.bekk.no/tech2018/sprak-og-rammeverk) kan du lese våre anbefalinger på enkelte rammeverk.

Det er vanskelig å holde oversikt over alle JS-rammeverkene, og til tider kan det føles som det dukker opp et nytt hver eneste uke. Vårt råd til deg som ny utvikler i web-landskapet, er derfor å starte med å lære de teknologiene som brukes på prosjektet ditt. Bli med i slack-kanalene **\#frontend** og **\#reactjs**, og ikke vær redd for å spørre om hjelp der eller fra dem som sitter rundt deg. Disse kanalene har også masse historikk med diskusjoner rundt valg av rammeverk, fordeler, ulemper osv.

## To SPA or not SPA

Når vi bruker React får vi en [SPA \(Single Page App\)](https://en.wikipedia.org/wiki/Single-page_application). Men det er ikke alltid man trenger å dra inn et rammeverk. Enkle sider med statisk innhold klarer seg fint med VanillaJS \(kun plain JavaScript uten noe form for rammeverk\) og god filstruktur. Det er greit å huske på at byggetid og kompleksitet gjerne øker med antall rammeverk.

## Typesikkerhet og profesjonalisering

Frontendutvikling har i løpet av de siste årene gjennomgått en ganske heftig profesjonaliseringsprosess. I dag finnes det svære frontend-kodebaser, hvor nye teknikker og språk viser seg gjeldende for å kunne håndtere økt kompleksitet. Et programmeringsspråk som er spesielt i vinden om dagen er [Elm](https://radar.bekk.no/tech2018/sprak-og-rammeverk/elm), som bruker mange av de samme teknikkene som i React/Redux, men også blant annet tilbyr typesikkerhet og garanterer ingen kjøretidfeil \(!\). Se for eksempel [Redux Schmedux - Fremtidens webapp er laget i Elm](https://vimeo.com/208178713) om du har lyst til å høre mer.

