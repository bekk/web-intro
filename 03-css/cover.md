# CSS
Cascading Style Sheets, eller CSS, tar seg av stylingen av HTML. Man kan blant annet definere hvordan elementene skal presenteres på skjermen, ved forskjellige skjermbredder, ved utskrift, og når de blir interagert med.

Når vi skriver CSS skriver vi sett med regler for presentasjonen av elementene i HTMLen vår.

```css
selector {
  property: value;
  property: value;
}
```

```css
body {
  color: rebeccapurple;
  background-color: white;
  font-size: 32px;
  border: 2px dotted tomato;
}
```

Iblant kan CSS føles unødvendig knotete å jobbe med, spesielt når man jobber med ukjente mengder legacy-CSS-kode eller når man prøver å få en stilig animasjon til å fungere i IE10. Andre ganger kan du juble av følelsen av å lage noe innmari stilig uten å behøve JavaScript! Når du skal jobbe med CSS handler det om å holde tungen rett i munnen og bruke DevTools for alt det er verdt.

![Family Guy CSS](../resources/css-family-guy.gif)

## Gode ressurser
* [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) er som vanlig din beste venn. Søker du på "søkeord" + "CSS" + "MDN" på google finner du som regel frem til gode svar (men husk å bruke googles søkefelt, ikke det interne på MDN...).
* [caniuse.com](http://caniuse.com/) gir deg oversikt over nettleserstøtte for de forskjellige reglene som finnes i CSS.
* På Difis nettsider for universell utforming finner du blant annet regelverk for [bruk av farger](https://uu.difi.no/krav-og-regelverk/losningsforslag-web/bruk-av-farger) og [krav til kontrast](https://uu.difi.no/krav-og-regelverk/losningsforslag-web/kontrast).
