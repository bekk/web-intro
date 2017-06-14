# Flyt

## Display
CSS-egenskapen `display` sier noe om hvordan et element skal legge seg i flyten på siden. Med flyten mener vi rekkefølgen på elementene i leseretning, fra øverst i venstre hjørne til nederst i høyre hjørne. Hvis man ikke definerer noe annet vil to sekvensielle HTML-elementer legge seg i den rekkefølgen de er definert i HTML-strukturen.

De forskjellige HTML-elementene har forskjellig default-verdi for `display`:

```html
<div>
  <h1>Overskrift</h1>              <!-- block -->
  <p>Litt tekst</p>                <!-- block -->
  <button>En knapp</button>        <!-- inline-block -->
  <button>Enda en knapp</button>
  <a href="#">Lenke</a>            <!-- inline -->
  <div>mer tekst</div>             <!-- blokk -->
</div>
```

<div style="background-color: lightgray;">
  <h1 style="margin-bottom: 5px;">Overskrift</h1>
  <p>Litt tekst</p>
  <button style="padding: 15px;">En knapp</button>
  <button style="padding: 15px;">Enda en knapp</button>
  <a href="#">Lenke</a>
  <div>mer tekst</div>
</div>

## Midtstilling

Med `text-align` kan vi velge om tekst skal være venstre-, midt- eller høyrejustert innenfor et blokk-element.

```html
<div class="midtstilt">Midtstilt?</div>
```

```css
.midtstilt { text-align: center; }
```

<div style="text-align:center; background-color:lightgray;">Midtstilt?</div>

`div` er et blokk-element og teksten blir midtstilt.

---

```html
<span class="midtstilt">Midtstilt?</div>
```

```css
.midtstilt { text-align: center; }
```

<span style="text-align:center; background-color:lightgray;">Midtstilt?</span>

Siden `span` er et inline-element kan vi ikke posisjonere tekst innenfor elementet.

---

Hvis vi vil midtstille et element innenfor sitt forelder-element kan vi bruke `margin`.

```html
<div class="midtstilt-blokk">Midstilt blokk</div>
```

```css
.midtstilt-blokk {
  width: 400px;
  margin-left: auto;
  margin-right: auto;
}
```

<div style="background-color:lightgray; width: 400px; margin: 0 auto;">Midtstilt blokk</div>

## Posisjonering

Inspiser disse elementene i DevTools:

<article style="background-color: darkgray;height: 200px;">
  <div style="background-color: lightpink; line-height: 30px; position: static;">A</div>
  <div style="background-color: seagreen; line-height: 30px;position: static;">B</div>
  <div style="background-color: cornflowerblue;line-height: 30px; position: static;">C</div>
<article>

Elementene har statisk posisjon. Det betyr at de plasseres slik de ligger i HTMLen og ikke blir påvirket av posisjonsegenskapene `top`, `right`, `left`, `bottom` og `z-index`.

Endre element B til å ha `position: relative`. Ser du noen forskjell? Relativ posisjon betyr at elementet ligger på sin statiske posisjon, men at endringer i posisjonsegenskapene vil få elementet til å flytte seg _relativt til sin egen posisjon_. Sett verdiene `top` og `left` for element B til å være 15px. Legg merke til at C ikke flytter på seg. Den opprinnelige avholdte plassen til B er den samme som før.

Endre nå element B til å ha `position: absolute`. Hvor ble elementet av? Med absolutt posisjon vil elementet forholde seg til posisjonsegenskapene `top`, `left` osv innenfor nærmeste posisjonerte forelder - eller rotelementet. Med absolutt posisjon blir det ikke holdt av plass til element B mellom A og C.

Se på `article`-elementet som ligger rundt A, B og C. Gi den `position: relative`. Hvor ble nå B av? Nå som `article` er posisjonert vil B forholde seg til den i stedet for rotelementet.

## Oppgaver
* [Midtstilling](https://jsfiddle.net/Matsemann/wg8oLh8a/)
* [Posisjonering](https://jsfiddle.net/Matsemann/b75wz3mj/1/)
