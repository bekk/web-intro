# Universell utforming

> **DIFI**:
* [Standarden for UU (WCAG 2.0)](https://uu.difi.no/krav-og-regelverk/wcag-20-standarden)
* [Veiledning og løsningsforslag for å følge WCAG 2.0](https://uu.difi.no/krav-og-regelverk/losningsforslag-web)


> **Andre ressurser**:
* [MDN: WAI-ARIA basics ](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
* [Videokurs: hvordan bygge UU-vennlige web apps](https://egghead.io/courses/start-building-accessible-web-applications-today)
* [Kom igang med voiceover](https://bocoup.com/blog/getting-started-with-voiceover-accessibility)
* [The A11y Project](http://a11yproject.com/)
* [Bloggpost om hvordan man tester UU](http://open.bekk.no/#!hvordan-tester-man-universell-utforming)


Det er viktig at vi lager nettsider som er universelt utformet. Ikke bare fordi det er [lovpålagt](https://www.difi.no/fagomrader-og-tjenester/universell-utforming), men fordi det gjør brukeropplevelsen til alle som bruker tjenesten din bedre. Du har kanskje scrollet nedover facebookfeeden din på t-banen og sett en video, selv om du ikke har med telefoner, fordi den har undertekster? Eller bare hatt en hånd tilgjengelig mens du sitter på pcen, men har brukt tab til å navigere deg gjennom siden? [Semantisk HTML](/02-html/03-semantikk.md) som vi beskrev i kapittelet om HTML, er viktig for å gjøre en nettside tilgjengelig for flere brukere, fordi det introduserer mening til elementene vi bygger nettsidene våre med, i tillegg til presentasjon.

[På denne siden har DIFI en video](https://uu.difi.no/) som oppsummerer hvorfor UU er viktig, og gir noen konkrete tips til hvordan man kan få universelt utformede systemer.

Vi har også en egen podcast i BEKK, og denne episoden er spesielt relevant hva UU gjelder (finnes også i diverse podcast-apper hvis man heller foretrekker å bruke det):

<div style="text-align: center">
  <iframe width="400" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247815709&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
</div>


## WAI-ARIA
I tillegg til semantisk HTML, kan du bruke [WAI-ARIA](https://en.wikipedia.org/wiki/WAI-ARIA) i HTML-elementene dine for å gjøre nettsiden din enda mer tilgjengelig for skjermleser-brukere.
WAI-ARIA er en spesifikasjon skrevet av W3C, og definerer et sett med HTML-attributter som kan brukes med elementer for å legge til semantisk betydning og forbedre tilgjengelighet der det mangler. Denne [videoen](https://egghead.io/lessons/html-5-intro-to-aria) gir en fin intro til WAI-ARIA og hvordan man bør bruke det sammen med semantisk HTML.

#### Husk
>Selv om WAI-ARIA er veldig nyttig, er det viktig å huske på at man bare bør bruke det når det er nødvendig. Du bør alltid bruke innebygde semantiske HTML-elementer for å uttrykke semantikk, men hvis det ikke er mulig å bruke HTML-semantikk, f.eks. hvis du lager noe komplekst som ikke kan lages med enkle HTML-elementer, er WAI-ARIA et verdifullt tilskudd for å skape tilgjengelig kode.

## Oppgaver
* Les over koden i [dette repoet](https://github.com/mdn/learning-area/tree/master/accessibility/aria/website-aria-roles) og se hvordan rollebegrepet brukes for å tilføre mening til nettsiden.
* Test VoiceOver på macen din med denne [oppstartsguiden](https://help.apple.com/voiceover/info/guide/10.12/)
