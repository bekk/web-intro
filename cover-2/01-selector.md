# Selectorer

Når vi skal definere hvilke elementer som skal treffes av en CSS-regel, bruker vi selectorer for å beskrive settet med elementer.

## **Tag-selectorer**

`body`, `div`, `img`, `button`

Treffer alle elementer med den gitte taggen.

```css
body {
    background-color: aliceblue;
}

button {
    color: #1234ab;
}
```

## **Klasse-selectorer**

`.btn-danger`, `.btn-ok`, `.kall-det-hva-du-vil`

Treffer alle elementer med den gitte klassen.

```css
.btn-danger {
    background-color: red;
}

.btn-ok {
    background-color: green;
}
```

## **ID-selectorer**

`#hovedmeny`, `#animasjon`

IDer må være unike, fordi css-regler for en ID gjelder for første matchende element. Som regel ønsker vi ikke å bruke ID-selectorer, fordi det er å foretrekke at vi har css-stiler som kan gjenbrukes. Hvis vi må style hvert element for seg, kan det fort bli vanskelig å vedlikeholde et konsekvent grensesnitt.

```css
#hovedmeny {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
}
```

## **Avanserte selectorer**

Det er helt uproblematisk å style ting ved å definere selectors inni selectors, bruke attributtmatching, tilstandsselectorer osv:

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

Men her må man holde tungen rett i munnen! Det enkleste er ofte det beste i css-verdenen, og flere mener det er best practice å ikke lage for kompliserte css-regler. På den måten blir det enklere både for fremtidige deg og for alle andre som skal jobbe med de samme stilene. Det er forøvrig ikke alltid like lett å vite hva salgs css-praksis som er lett å vedlikeholde over tid. [Denne artikkelen](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06) forklarer hvordan Medium utviklet sine css-konvensjoner gjennom flere faser til de til slutt landet på noe de var rimelig fornøyd med.

## Oppgave

* Lag en CSS-fil og link til den i HTML-filen med knapper fra [kapittel 2](../cover-1/06-knapper.md).
* Sett en bakgrunnsfarge på siden.
* Endre font, farge og skriftstørrelse på teller-verdien.
* Endre størrelse, bakgrunnsfarge, border/ramme og tekstfarge på knappene.

## Bonus

Øv deg på selectorer i spillet [CSS Diner](https://flukeout.github.io/)

