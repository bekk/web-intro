# Oppgavebeskrivelse
I denne oppgaven skal du lage en visning av leilighetsannonser alla finn.no/hybel.no/airbnb. Du står fritt til å implementere ditt eget desgin, men du kan også ta utgangspunkt i løsningsforslaget hvis du ønsker det. Løsningsforslaget har valgt å fokusere på tittel, pris, kvadratmeter og adresse i tillegg til en bildekarusell som det viktigste.

## Annonser
Under mappen annonser finner du 8 forskjellige annonser hvor hver annonse inneholder et sett med bilder og en details.json-fil. jsonfilen beskriver nøkkelinformasjon til hver annonse. Se eksempelet under:
```javascript
    {
      "omradetittel": "Grunerløkka",
      "tittel": "Rustikk og påkostet 2-roms med klassisk sjarm midt på Løkka! Sydvendt balkong. Peis. Fredelige omgivelser.",
      "pris": "3 000 000",
      "kvm": "51",
      "adresse": "Helgesens gate 5a, 0563 Oslo"
    }
```

## Løsningsforslaget
Forslag til løsning ligger under solutions. For å se løsningforslaget - følg stegene under "For å starte opp serveren" og i stedet for å åpne localhost:6001 åpner du localhost:6002

## Oppgave uten javascript
Hvis du ønsker kan denne oppgaven løses helt uten javascript, dog må man skrive mye mer html-kode selv.

* ta utgangspunt i home.html-filen under client-mappen
* bygg opp annonseelementene med html - ta med den informasjonen du mener er viktigst å ha med i en annonse. For å vise første bilde i den første annonsen kan du legge til denne html-en:
     ```html
    <img src="../../annonser/annonse1/1.jpg" />
    ```
    Siden annonser ligger høyere oppe i mappestrukturen enn home.html (som er utgangspunktet vårt),  må vi skrive ../ foran for å finne riktig fil. Første ../ vil gå ett steg opp i mappestrukturen. Da vil man kunne aksessere mappen client, server osv. Derfor må vi skrive ../-to ganger får å komme til mappen annonser. Deretter kan vi traversere oss ned til det første bildet.
* html-elementer som kan være nyttig er -
    ```html
        <aticle>, <section>, <img>, <main>, <h1>, <h2>, <h3>, <a>, <div>, <p>
    ```
* legg på klassenavn du føler gir mening - tenk på gjenbrukbarhet
* style innholdet ditt slik du ønsker det i styling.css-filen
* gjør nødvendige endringer så det ser bra ut på forskjellige skjermstørrelser
* se under for stylingstips

## Oppgave med javascript
Ta utgangspunkt i index.html-filen som inkluderer script.js og styling.css for henholdsvis javascript og styling.
Overordnet går oppgaven ut på at man først gjør et kall mot serveren for å få alle annonsedataene, for deretter å lage en html-representasjon av disse.


### For å starte opp serveren:
Naviger til mappen assignment og skriv inn følgende kommandoer (som for bildegalleriet)
```sh
    $ npm install
    $ npm start
```
Gå deretter til http://localhost:6001 i nettleseren din. Da skal alt være klart til å starte på oppgaven.

### Oppgave 1 - hent data
1. Lag en funksjon getAnnonser() som returnerer resultatet fra en request mot '/annonser' når siden blir lastet
2. Skriv resultatet til consolen.

Forventet resultat er en liste med annonser hvor hver annonse inneholder en ny liste med urler til annonsebildene, og et objekt som inneholder infromasjon om leiligheten. Denne informasjonen skal brukes i neste oppgave til å vise annonsene på siden.

### Oppgave 2 - vis bildene
1. Lag en funksjon som itererer over annonsene og lager html-markup for første bilde i hver annonse
2. Lag et container-element i index.html-filen som skal inneholde annonsemarkupen
3. Sett inn annonsemarkupen i containerelementet så bildene vises på siden.

### Oppgave 3 - utvid annonsene
 1. Utvid annonsene til å vise all informasjon som tilhører en annonsene. Her kan det være greit å begynne med en ting om gangen.
```sh
 {
  "omradetittel": "Grunerløkka",
  "tittel": "Rustikk og påkostet 2-roms med klassisk sjarm midt på Løkka! Sydvendt balkong. Peis. Fredelige omgivelser.",
  "pris": "3 000 000",
  "kvm": "51",
  "adresse": "Helgesens gate 5a, 0563 Oslo"
}
```
tips: her er det lurt å tenke litt på overskriftshiearki (h1,h2,h3) - hvilken informasjon du mener er viktigst osv.

### Oppgave 4 - styling
1. Du står helt fritt til å designe annonsene som du selv vil, men det er ingenting i veien for å kopiere løsningsforslaget. I løsningsforslaget er det brukt noe css som vi ikke har gått gjennom tidligere. Se gjerne nedenfor for tips til fremgangsmåte.
2. Gjør nødvendige tilpasninger så det også ser fint ut på mobil.

tips: Hvis du vil se hvordan siden blir seendes ut på én type mobiltelefon kan du i chrome velge type mobilmodell ved å trykke på mobil/tablet-ikonet øverst i venstre hjørnet i developer toolen.

## Bildekarusell
Uavhengig av om man har valgt å løse oppgaven med eller uten javascript kan man lage en bildekarusell av annonsene - men dog med javascript ;) Tanken her er at man skal kunne trykke på piler for å se flere bilder av leiligheten.

### Oppgave 1 - vise alle bildene
Per nå viser vi bare første bilde i hver annonse
1. Lag en ny funksjon som tar inn en annonse og som lager markup for alle bildene tilhørende den annonsen
2. Kall denne funksjonen for hver annonse slik at alle bildene vises på siden

### Oppgave 2 - skjule alle bildene utenom det første
1. Lag en klasse i css-filen som skjuler bilder
2. Legg til denne klassen på alle bildene utenom det første. Da er vi tilbake til at bare første bilde i hver annonse vises.
Tips: for å skjule elementer kan man sette display:none

### Oppgave 3 - legg til pil-ikoner
1. For at brukeren skal skjønne at det går an å bla i bildene må det finnes noe som vedkommende kan klikke på. Legg til et "bla-fremover"-ikon og "bla-bakover"-ikon.
Under img-mappen ligger to pil-ikoner som kan brukes.
2. Legg til de to nye bilde-ikonene i markupen som blir laget for hver annonse.
3. Style de nye ikonene så de plasseres fint for hver annonse.
Tips: for å ta i bruk bilde-ikonene som ligger i img-mappen setter man src-attributtet til filnavnet -
```html
    <img src="left.png" />.
```
Vil man bruke noen andre ikoner kan disse legges under img-mappen.

### Oppgave 3 - bla fremover og bakover
1. Legg til en eventListener som lytter på click-eventer på main-elementet
2. Sjekk at elementet som ble klikket på er ett av pilikonene
3. Sjekk om elementet som ble klikket på er fremover-ikonet, sett på klassen hidden, finn neste element og fjern klassen hidden for at denne skal vises.
4. Sjekk om elementet som ble klikket på er bakover-ikon, sett på klassen hidden, finn forrige element og fjern klassen hidden for at denne skal vises

Tips:
1. Klasser kan legges til og fjernes sånn: element.classList.remove("enklasse") og element.classList.add("enklasse")
2. For å sjekke om et element har en klasse: element.classList.contains("enklasse")

### Oppgave 4 - bonus
1. Legg til transitions for å gi siden mer liv
2. Legg til filtere for å få bildene i samme stil
3. Finn på noe kult

## Stylingtips
### Tegne sirkler
Hvis man skal tegne sirkler kan man bruke en css-egenskap som heter border-radius for å få avrundet hjørner (https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius).  Setter man denne til 50% vil hjørnene bli så avrundet at det vil se ut som en sirkel/ellipse. Om den blir seendes ut som en fin sirkel avhenger av flere egenskaper. For at sirkelen skal være rundt uansett innhold kan følgende triks brukes
```css
    border-radius: 50%; //for å få avrundet hjører
    line-height: 60px; // linjeavstand samme som høyden (gitt at det er tekst i sirkelen)
    height: 60px; //høyde og bredde like stort
    width: 60px;
    text-align: center //for å midtstille evt tekst inne i sirkelen
    background-color: #333333; // bakgrunnsfarge for å skille seg ut fra resten
```
### Rendre bilder
For å ta vare på bilde-ration men allikevel sette en bredde eller høyde på bilde-containeren kan man bruke:
```css
    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain; //sørger for at ration blir bevart
    }
```
### m<sup>2</sup>
For å få 2-tallet opphøyd kan man bruke html-tagen
 ```html
        <sup>2</sup>
 ```
