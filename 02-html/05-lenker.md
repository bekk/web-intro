# Lenker

> * **MDN**: [`a`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
> * **DIFI**: [Krav og anbefalinger for lenker](https://uu.difi.no/krav-og-regelverk/losningsforslag-web/lenker)

Noen ganger trenger du en lenke, og noen ganger trenger du en knapp. Begge gangene bør du tenke gjennom hvilken HTML-tagg du skal bruke. Hvis du skal lage en lenke bruker du taggen `a`.

```html
<a href="https://www.bekk.no">BEKK.no</a>
```

Lenke-elementer kan ha forskjellige funksjoner. De kan brukes til å lenke innad på samme side, til andre sider, til filer eller til epostadresser. Man kan bestemme om lenken skal åpnes i en ny fane, i samme fane, i et nytt vindu eller i en iframe.

```html
<a href="https://www.bekk.no">Samme fane</a>
<a href="https://www.bekk.no" target="_blank">Ny fane</a>
<a href="#dokumentasjon">Innad på samme side</a>
<a href="../resources/nav-html.png" download="web-intro.png">Last ned en ressurs</a>
```

## Dokumentasjon
* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) har god dokumentasjon for `a`-taggen og dens attributter.
* Difi skriver om .
