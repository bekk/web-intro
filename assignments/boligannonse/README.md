# Oppgavebeskrivelse

I denne oppgaven skal du lage en visning av leilighetsannonser à la _finn.no_, _hybel.no_ eller _Airbnb_. Du står fritt til å implementere ditt eget design, men du kan også ta utgangspunkt i designet til løsningsforslaget hvis du ønsker det. Løsningsforslaget har valgt å fokusere på tittel, pris, kvadratmeter og adresse i tillegg til en bildekarusell som det viktigste.

Prekode og løsningsforslag finner du i `boligannonse`-mappa under `assignments`.

## Annonser

Under mappen annonser finner du 8 forskjellige annonser, hvor hver inneholder et sett med bilder og en `details.json`-fil. JSON-filen beskriver nøkkelinformasjon til hver annonse. Se eksempelet under:

```json
{
    "omradetittel": "Grunerløkka",
    "tittel": "Rustikk og påkostet 2-roms med klassisk sjarm midt på Løkka! Sydvendt balkong. Peis. Fredelige omgivelser.",
    "pris": "3 000 000",
    "kvm": "51",
    "adresse": "Helgesens gate 5a, 0563 Oslo"
}
```

## Løsningsforslaget

I denne oppgaven kan det være fint å se på løsningsforslaget i nettleseren i forkant for å forstå bedre hva man skal gjøre. Men ikke se på koden i løsningsforslaget før du har prøvd å løse oppgaven på egenhånd!

Forslag til løsning ligger i mappen `solutions`. For å se løsningforslaget - følg stegene under "For å starte opp serveren" og i stedet for å åpne `localhost:6001` åpner du `localhost:6002`.

## Oppgave

Ta utgangspunkt i `index.html`-filen under client-mappen, som inkluderer `script.js` og `styling.css` for henholdsvis javascript og styling.
Overordnet går oppgaven ut på at man først gjør et kall mot serveren for å få alle annonsedataene, for deretter å lage en html-representasjon av disse.

### For å starte opp serveren:

Naviger til `boligannonse/assignment` og skriv inn følgende kommandoer:

```sh
$ npm install
$ npm start
```

Gå deretter til `http://localhost:6001` i nettleseren din, hvor alt skal være klart til å starte på oppgaven.

### Oppgave 1 - hent data

1. Lag en funksjon getAnnonser() som returnerer resultatet fra en request mot '/annonser' når siden blir lastet.
2. Skriv resultatet til consolen.

Forventet resultat er en liste med annonser hvor hver annonse inneholder en ny liste med urler til annonsebildene, og et objekt som inneholder infromasjon om leiligheten. Denne informasjonen skal brukes i neste oppgave til å vise annonsene på siden.

#### Tips

> Du kan bruke [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) til å hente ut annonsene fra serveren.

### Oppgave 2 - vis bildene

1. Lag en funksjon som itererer over annonsene og lager html-markup for første bilde i hver annonse.
2. Lag et container-element i index.html-filen som skal inneholde annonsemarkupen
3. Sett inn annonsemarkupen i containerelementet så bildene vises på siden.

### Oppgave 3 - utvid annonsene

1.  Utvid annonsene til å vise all informasjon som tilhører en annonsene. Her kan det være greit å begynne med en property om gangen.

```json
{
    "omradetittel": "Grunerløkka",
    "tittel": "Rustikk og påkostet 2-roms med klassisk sjarm midt på Løkka! Sydvendt balkong. Peis. Fredelige omgivelser.",
    "pris": "3 000 000",
    "kvm": "51",
    "adresse": "Helgesens gate 5a, 0563 Oslo"
}
```

#### Tips

> Her er det lurt å tenke litt på overskriftshiearki (h1,h2,h3) - hvilken informasjon du mener er viktigst osv.

### Oppgave 4 - styling

1. Du står helt fritt til å designe annonsene som du selv vil, men det er ingenting i veien for å kopiere layouten fra løsningsforslaget. I løsningsforslaget er det brukt noe css som vi ikke har gått gjennom tidligere. Se gjerne nederst på siden for tips til fremgangsmåte.
2. Gjør nødvendige tilpasninger så det også ser fint ut på mobil.

#### Tips

> Hvis du vil se hvordan siden blir seendes ut på ulike enheter, kan du velge ulike skjermstørrelser og modeller ved å trykke på mobil/tablet-ikonet øverst i venstre hjørne i DevTools i Chrome, eller øverst i høyre hjørne i Firefox.

### Oppgave 5 - bildekarusell

Lag en bildekarusell av annonsene med JavaScript! Tanken her er at man skal kunne trykke på piler for å se flere bilder av leiligheten.

#### Steg 1 - vise alle bildene

Per nå viser vi bare første bilde i hver annonse

1. Lag en ny funksjon som tar inn en annonse og som lager markup for alle bildene tilhørende den annonsen
2. Kall denne funksjonen for hver annonse slik at alle bildene vises på siden

#### Steg 2 - skjule alle bildene utenom det første

1. Lag en klasse i css-filen som skjuler bilder
2. Legg til denne klassen på alle bildene utenom det første. Da er vi tilbake til at bare første bilde i hver annonse vises.

> **Tips:** for å skjule elementer kan man sette `display: none` i css

#### Steg 3 - legg til pil-ikoner

1. For at brukeren skal skjønne at det går an å bla i bildene må det finnes noe som vedkommende kan klikke på. Legg til et "bla-fremover"-ikon og "bla-bakover"-ikon.
   Under img-mappen ligger to pil-ikoner som kan brukes.
2. Legg til de to nye bilde-ikonene i markupen som blir laget for hver annonse.
3. Style de nye ikonene så de plasseres fint for hver annonse.

#### Tips

> For å ta i bruk bilde-ikonene som ligger i img-mappen setter man src-attributtet til filnavnet:

```html
   <img src="left.png" />
```

> Vil man bruke noen andre ikoner kan disse legges under img-mappen.

#### Steg 4 - bla fremover og bakover

1. Legg til en eventListener som lytter på click-eventer på main-elementet
2. Sjekk at elementet som ble klikket på er ett av pilikonene
3. Sjekk om elementet som ble klikket på er fremover-ikonet, sett på klassen hidden, finn neste element og fjern klassen hidden for at denne skal vises.
4. Sjekk om elementet som ble klikket på er bakover-ikon, sett på klassen hidden, finn forrige element og fjern klassen hidden for at denne skal vises

#### Tips

> -   Klasser kan legges til og fjernes på følgende måte: `element.classList.remove("enklasse")` og `element.classList.add("enklasse")`
> -   For å sjekke om et element har en klasse: `element.classList.contains("enklasse")`

### Oppgave 6 - bonus

1. Legg til transitions for å gi siden mer liv
2. Legg til filtere for å få bildene i samme stil

## Stylingtips

### Tegne sirkler

Hvis man skal tegne sirkler kan man bruke en css-egenskap som heter [border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) for å få avrundet hjørner. Setter man denne til 50% vil hjørnene bli så avrundet at det vil se ut som en sirkel/ellipse. Om den blir seendes ut som en fin sirkel avhenger av flere egenskaper. For at sirkelen skal være rundt uansett innhold kan følgende triks brukes

```css
    border-radius: 50%;       // for å få avrundet hjører
    line-height: 60px;        // linjeavstand samme som høyden (gitt at det er tekst i sirkelen)
    height: 60px;             // høyde og bredde like stort
    width: 60px;
    text-align: center        // for å midtstille evt tekst inne i sirkelen
    background-color: #333333; // bakgrunnsfarge for å skille seg ut fra resten
```

### Rendre bilder

For å ta vare på bilde-ratioen men allikevel sette en bredde eller høyde på bilde-containeren kan man bruke:

```css
img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; // sørger for at ratioen blir bevart
}
```

### m<sup>2</sup>

For å få 2-tallet opphøyd kan man bruke html-tagen

```html
<sup>2</sup>
```
