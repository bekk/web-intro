# Selectorer

Når vi skal definere hvilke elementer som skal treffes av en CSS-regel, bruker vi selectorer for å beskrive settet med elementer.

**Tag-selector:** `body`, `div`, `img`, `button`

Treffer alle elementer med den gitte taggen.

```css
body {
    background-color: aliceblue;
}
button {
    color: #1234ab;
}
```

**Klasse-selector:** `.btn-danger`, `.btn-ok`, `.kall-det-hva-du-vil`

Treffer alle elementer med den gitte klassen.

```css
.btn-danger {
    background-color: red;
}
.btn-ok {
    background-color: green;
}
```

**ID-selector:** `#hovedmeny`, `#animasjon`

IDer må være unike, fordi regler for en ID gjelder for første matchende element. Som regel ønsker vi ikke å bruke ID-selectorer, fordi det er å foretrekke at vi har css-stiler som kan gjenbrukes. Hvis vi må style hvert element for seg, kan det fort bli vanskelig å vedlikeholde et konsekvent grensesnitt.

```css
#hovedmeny {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
}
```

**Avanserte selectorer:**

Selector inni selector, attributtmatching, tilstandsselector, her må man holde tungen rett i munnen!

```css
a {
    ...;
} /* vanlig selector, .btn-ok */
a b {
    ...;
} /* nøstede, b må være inni a, .boks .heading */
a > b {
    ...;
} /* nøstede, b med a som nærmeste parent, .boks > .heading */
ab {
    ...;
} /* må ha både a og b, button.btn-ok, .btn.btn-ok */
a:state {
    ...;
} /* a:hover */
a:last-child {
    ...;
} /* siste av parent, li:last-child */
a:nth-child(2n + 1) {
    ...;
} /* alle n som matcher uttrykket */
a[attributt='verdi'] {
    ...;
} /* matcher på attributt, a:[href^="https://"] */
```

## Oppgave

-   Lag en CSS-fil og link til den i HTML-filen med knapper fra [kapittel 2](/02-html/06-knapper.md).
-   Sett en bakgrunnsfarge på siden.
-   Endre font, farge og skriftstørrelse på teller-verdien.
-   Endre størrelse, bakgrunnsfarge, border/ramme og tekstfarge på knappene.

<!-- ## Bonus:

Øv deg på selectorer i spillet [CSS Diner](https://flukeout.github.io/) -->
