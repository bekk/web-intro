# Linting

Når man jobber mange sammen på et prosjekt, er det naturlig at folk med ulik erfaring har ulike preferanser hva format angår. Hvor skal det være mellomrom? Er en tab to eller fire spaces? Skal vi alltid bruke paranteser rundt argumentene i en anonym funksjon, eller bare når det er flere enn ett argument?
Andre ganger kan det hende man rett og slett ikke husker hvilken standard man som team har bestemt seg for å følge.

Problemet med mange preferanser og manglende standard, eventuelt at man glemmer standardene som er bestemt på prosjekt, er at koden kan bli mindre lesbar. Når vi følger standarder med kjente mønstre, optimaliserer hjernen vår på dette og det kan bli enklere å raskt sette seg inn i kode andre har skrevet. I tillegg kan man få mye støy i pull requests, f.eks. fra teammedlemmer som påpeker at man ikke følger standarder. Eventuelt unødvendige endringer i git-diffen, som stort sett handler om formatteringspreferanse.

Løsningen på dette er å bruke linting, feks [ESLint](http://eslint.org/) med [Airbnb sin JavaScript style guide](https://github.com/airbnb/javascript). [Her finner du en oversikt](http://eslint.org/docs/user-guide/integrations) over hvilke byggverktøy og IDEer som støtter linting. Vi anbefaler på det varmeste å gjøre lintingen til en del av arbeidsprosessen din, fordi man gjerne sparer mye tid underveis i utviklingen, får renere pull requests, og ikke minst lærer seg å skrive god JavaScript-kode.

Det finnes også verktøy som [prettier](https://github.com/prettier/prettier), som tvinger gjennom konsekvent formattering på hele prosjektet.
