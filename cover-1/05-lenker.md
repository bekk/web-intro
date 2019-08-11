# Lenker

{% hint style="info" %}
**Dokumentasjon fra MDN**: [`a`-taggen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)  
**Dokumentasjon fra DIFI**: [Krav og anbefalinger for lenker](https://uu.difi.no/krav-og-regelverk/losningsforslag-web/lenker)
{% endhint %}

Noen ganger trenger du en lenke, og noen ganger trenger du en knapp. Begge gangene bør du tenke gjennom hvilken HTML-tag du skal bruke, fordi de kommer med hver sine egenskaper som [passer i ulike settinger](https://marcysutton.com/links-vs-buttons-in-modern-web-applications/). Ikke minst brukes de i ulike semantiske settinger. Lenker brukes som regel når vi vil navigere til en ny side eller ressurs \(med interne lenker som unntaket\), mens knapper brukes når vi vil trigge en hendelse i grensesnittet vi står i, f.eks. vise og skjule innhold på siden.

Hvis du skal lage en lenke bruker du taggen `a`:

```markup
<a href="https://www.bekk.no">bekk.no</a>
```

Lenke-elementer kan ha forskjellige funksjoner. De kan brukes til å lenke innad på samme side, til andre sider, til filer eller til e-postadresser. Man kan bestemme om lenken skal åpnes i en ny fane, i samme fane, i et nytt vindu eller i en iframe.

```markup
<a href="https://www.bekk.no">Samme fane</a>
<a href="https://www.bekk.no" target="_blank" rel="noopener noreferrer">Ny fane</a>
<a href="#dokumentasjon">Innad på samme side</a>
<a href="../resources/nav-html.png" download="web-intro.png">Last ned en ressurs</a>

<h1 id="dokumentasjon">
  Overskriften vi lenket til innad på siden
</h1>
```

## Oppgave

Legg inn en ny `html`-fil i samme mappe som du la `index.html`-fila fra[ del 1](../cover/01-hello.md). Lag en meny som lenker til denne \(og eventuelt flere andre sider du måtte ha lyst til å lenke til\). Tenk semantisk html, men ikke bekymre deg for at den kanskje ikke ser ut som en meny helt ennå. Når du kommer til delen om [CSS](../cover-2) kan du begynne å style den til å se ut som du selv vil.

{% hint style="info" %}
**Hint:** Her kan det lønne seg å bruke en kombinasjon av elementet `nav` og en uordnet liste:  
`<ul>  
 <li>Menyelement1</li>  
 <li>Menyelement2</li>

</ul>`
{% endhint %}
