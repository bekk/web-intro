# CSS
> * [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) er som vanlig din beste venn. Søker du på "søkeord" + "CSS" + "MDN" på google finner du som regel frem til gode svar (men husk å bruke googles søkefelt, ikke det interne på MDN...).
* [caniuse.com](http://caniuse.com/) gir deg oversikt over nettleserstøtte for de forskjellige reglene som finnes i CSS.
* På Difis nettsider for universell utforming finner du blant annet regelverk for [bruk av farger](https://uu.difi.no/krav-og-regelverk/losningsforslag-web/bruk-av-farger) og [krav til kontrast](https://uu.difi.no/krav-og-regelverk/losningsforslag-web/kontrast).
* Når du vil sjekke om to farger har tilstrekkelig kontrast for UU-kravene kan du bruke [denne kontrastkalkulatoren](http://leaverou.github.io/contrast-ratio/).
* Er du usikker på hvilken av to regler som prioriteres? Sjekk ut denne [spesifisitetskalkulatoren](https://specificity.keegan.st/).

Cascading Style Sheets, eller CSS, tar seg av stylingen av HTML. Man kan blant annet definere hvordan elementene skal presenteres på skjermen, og kan spesifisere egne regler ved forskjellige skjermbredder, ved utskrift, og når de blir interagert med.

CSS kan legges direkte på html-elementer med attributtet `style="property: value"`, men vi legger det som regel i en egen `.css`-fil. Denne kan deretter lenkes inn i htmlen på følgende måte:
```html
<link rel="stylesheet" type="text/css" href="styling.css" />
```

Når vi skriver CSS skriver vi sett med regler for presentasjonen av elementene i HTMLen vår. Reglene har prioritet etter [regelvekt](https://developer.mozilla.org/en/docs/Web/CSS/Specificity) og rekkefølge. Om du lager to regler med lik selector vil den siste overskrive den første.

Syntaks:
```css
selector {
  property: value;
  property: value;
}
```

La oss lage to regler med samme selector:
```css
body {
  color: rebeccapurple;
  background-color: white;
  font-size: 32px;
  border: 2px dotted tomato;
}
body {
  font-size: 16px;
}
```

Resultat:
```css
body {
  color: rebeccapurple;
  background-color: white;
  font-size: 16px;
  border: 2px dotted tomato;
}
```

Iblant kan CSS føles unødvendig knotete å jobbe med, spesielt når man jobber med ukjente mengder legacy-CSS-kode eller når man prøver å få en stilig animasjon til å fungere i IE10. Andre ganger kan du juble av følelsen av å lage noe innmari stilig uten å behøve JavaScript! Når du skal jobbe med CSS handler det om å holde tungen rett i munnen og bruke DevTools for alt det er verdt.

![Family Guy CSS](../resources/css-family-guy.gif)
