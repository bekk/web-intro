# Repoet

I denne oppgaven skal vi bruke prekode fra repoet. Hvis du ikke allerede har hentet det ned i forbindelse med nedteller-oppgaven i går, får du hentet det ned ved å kjøre følgende kommando:

`git clone https://github.com/bekk/web-intro.git`

Oppgaven ligger under `assignments > bildegalleri > assignment > client`, og løsningsforslag for hver deloppgave finner du under
`assignments > bildegalleri > solutions > 1 / 2 / 3 ...`

## Kjør programmet

Gå til `bildegalleri/assignment` i en terminal, og kjør opp programmet ved å bruke følgende to kommandoer:

-   Kjør `npm install` som installerer avhengighetene vi trenger
-   Kjør `npm start` for å starte webserverern

For å se nettsiden, åpne http://localhost:5000 i en nettleser (ikke åpne html-filen rett fra filsystemet som tidligere). For hver oppgave kan du finne ut hva som skal lages på http://localhost:500X, hvor X er oppgavenummeret. Altså vil det man skal lage i oppgave 1 være tilgjengelig på http://localhost:5001 etter at du har kjørt opp webserveren - men ikke vær en luring og se for mye på koden før du har forsøkt å sette det opp selv!

## Oppgave 1

-   I `script.js`
    -   Gjør en request mot `/sok?tag=bekk` når siden blir lastet
    -   Logg ut resultatet i consollet

## Oppgave 2

-   Lag en ny funksjon som heter `renderImages` som tar inn listen over bilder
-   Denne funksjonen skal returnere HTML-markup
-   For hvert bilde, lag en `<figure>` med `<img>` som viser bildet og en `<figcaption>` som viser tittelen
-   Sett HTML-en som `renderImages` returnerer som innhold til `<main>`-elementet

## Oppgave 3

-   Legg til media-queries nederst i CSS-filen for å:
-   Minske bredden på `figure` slik at det blir plass til 2 bilder i bredden ved medium skjermer
-   Vise 3 bilder i bredden ved enda bredere skjerm

## Oppgave 4

-   Fortsett på løsningen fra forrige oppgave
-   Legg til submit event handler på form'et
-   Hent ut verdien som er skrevet inn i tekstfeltet
-   Bruk verdien til å hente ut og vise de nye bildene

## Oppgave 5

-   URLen i nettleseren skal oppdatere seg ved søk
    -   Lag en router-funksjon som søker på det som ligger i URLen
    -   I eventlisteneren for submit, oppdater URLen og kall routeren
-   Skal kunne bruke frem- og tilbakeknappene i nettleseren
    -   Legg til en popstate-listener som kaller routeren
-   Skal kunne åpne siden rett på et søk
    -   Kall router-funksjonen i det siden lastes

## Oppgave 6

-   Legg en lenke rundt bildene som vises, som lenker til det man har søkt på pluss hvilket nummer bildet er.
    -   F. eks. `href="/bekk/0"`, `href="/bekk/1"` osv.
-   Når et bilde klikkes på, hijack eventet og bruk pushstate til å oppdatere URL
-   I routeren, vis bare bildet med riktig index om det ligger en index i URL
    -   Om `<figure>` får klassen `fullwidth` får bildet automatisk riktig styling.
