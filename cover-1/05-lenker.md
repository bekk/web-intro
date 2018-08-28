# Lenker

> * **MDN**: [`a`-taggen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
> * **DIFI**: [Krav og anbefalinger for lenker](https://uu.difi.no/krav-og-regelverk/losningsforslag-web/lenker)

Noen ganger trenger du en lenke, og noen ganger trenger du en knapp. Begge gangene bør du tenke gjennom hvilken HTML-tag du skal bruke, fordi de kommer med hver sine egenskaper, som [passer i ulike settinger](https://marcysutton.com/links-vs-buttons-in-modern-web-applications/). Ikke minst brukes de i ulike semantiske settinger, der lenker som regel brukes når vi vil navigere til en ny side eller ressurs \(med interne lenker som unntaket\), og knapper brukes når vi vil trigge en hendelse i grensesnittet vi står i, f.eks. toggling av innhold.

Hvis du skal lage en lenke bruker du taggen `a`.

```markup
<a href="https://www.bekk.no">bekk.no</a>
```

Lenke-elementer kan ha forskjellige funksjoner. De kan brukes til å lenke innad på samme side, til andre sider, til filer eller til e-postadresser. Man kan bestemme om lenken skal åpnes i en ny fane, i samme fane, i et nytt vindu eller i en iframe.

```markup
<a href="https://www.bekk.no">Samme fane</a>
<a href="https://www.bekk.no" target="_blank">Ny fane</a>
<a href="#dokumentasjon">Innad på samme side</a>
<a href="../resources/nav-html.png" download="web-intro.png">Last ned en ressurs</a>

<h1 id="dokumentasjon">
  Overskriften vi lenket til innad på siden
</h1>
```

## Oppgaver

* Legg inn en ny html-fil i samme mappe som fila du lagde i kapittel 1. Lag en meny som lenker til denne \(og eventuelt flere andre sider du måtte ha lyst til å lenke til\). Tenk semantisk html, og når du kommer til kapittelet om [css](../cover-2/) kan du begynne å [style den til å se ut som du selv vil](../cover-2/05-layout.md#oppgaver).

