# Universell utforming

> **DIFI**:
> -   [Standarden for UU (WCAG 2.0)](https://uu.difi.no/krav-og-regelverk/wcag-20-standarden)
> -   [Veiledning og løsningsforslag for å følge WCAG 2.0](https://uu.difi.no/krav-og-regelverk/losningsforslag-web)

> **Andre ressurser**:
> -   [MDN: WAI-ARIA basics ](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
> -   [Videokurs: hvordan bygge UU-vennlige web apps](https://egghead.io/courses/start-building-accessible-web-applications-today)
> -   [Kom igang med voiceover](https://bocoup.com/blog/getting-started-with-voiceover-accessibility)
> -   [The A11y Project](http://a11yproject.com/)
> -   [Bloggpost om hvordan man tester UU](http://open.bekk.no/#!hvordan-tester-man-universell-utforming)

Det er viktig at vi lager nettsider som er universelt utformet. Ikke bare fordi det er [lovpålagt](https://www.difi.no/fagomrader-og-tjenester/universell-utforming), men fordi det gjør brukeropplevelsen til alle som bruker tjenesten din bedre. Du har kanskje scrollet nedover facebookfeeden din på t-banen og sett en video, selv om du ikke har med telefoner, fordi den har undertekster? Eller bare hatt en hånd tilgjengelig mens du sitter på pcen, men har brukt tab til å navigere deg gjennom siden? [Semantisk HTML](/02-html/03-semantikk.md) som vi beskrev i kapittelet om HTML, er viktig for å gjøre en nettside tilgjengelig for flere brukere, fordi det introduserer mening til elementene vi bygger nettsidene våre med, i tillegg til presentasjon.

[På denne siden har DIFI en video](https://uu.difi.no/) som oppsummerer hvorfor UU er viktig, og gir noen konkrete tips til hvordan man kan få universelt utformede systemer.

Vi har også en egen podcast i Bekk, og [denne episoden](https://www.acast.com/bekkopenpodcast/10-den-om-tilgjengelighet-1) er spesielt relevant hva UU gjelder (finnes også i diverse podcast-apper hvis man heller foretrekker å bruke det):

## WAI-ARIA

[WAI-ARIA](https://en.wikipedia.org/wiki/WAI-ARIA) er et sett attributter som settes på HTML-elementer og fungerer som et ekstra lag med beskrivende metadata. Disse er ikke ment som en erstatning for det semantiske innholdet som god bruk av HTML allerede gir, men som et tillegg. Det kan brukes til å informere skjermleseren om tilstander og oppdateringer i grensesnittet, noe som HTML i selg selv ikke har støtte for. Eksempelvis kan vi ved hjelp av WAI-ARIA informere brukeren om hvorvidt en meny er åpen eller lukket, om nytt innhold er lastet inn, eller om en feilmelding har dukket opp.

Denne [videoen](https://egghead.io/lessons/html-5-intro-to-aria) gir en fin intro til WAI-ARIA og hvordan man bør bruke det sammen med semantisk HTML.

#### Husk

> Selv om WAI-ARIA er veldig nyttig, er det viktig bare bruke det når det er nødvendig. Du bør alltid utnytte innebygde semantiske HTML-elementer for å uttrykke semantikk, men hvis det ikke er mulig å bruke HTML-semantikk, f.eks. hvis du lager noe komplekst som ikke kan lages med enkle HTML-elementer, er WAI-ARIA et verdifullt tilskudd for å skape tilgjengelig kode.

## Oppgaver

-   Les over koden i [dette repoet](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles) og se hvordan WAI-ARIA sitt rollebegrep brukes for å tilføre mer informasjon om nettsiden.
-   Test VoiceOver på macen din med denne [oppstartsguiden](https://help.apple.com/voiceover/info/guide/10.12/)
