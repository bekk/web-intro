# Head og body

Vi så tidligere at et HTML-dokument har følgende struktur:

```markup
<html lang="no">
  <head></head>
  <body></body>
</html>
```

Men hva er forskjellen på innholdet i `head` og `body`?

## Head

{% hint style="info" %}
**Dokumentasjon fra MDN**: [Whats in the head? Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
{% endhint %}

I `head`-elementet legger vi metadata vi ønsker å tilføye dokumentet, men som ikke skal vises på selve siden. I seksjonen hvor vi [satte opp en liten nettside](../cover/01-hello.md), la vi blant annet inn `charset` for å fortelle nettleseren hva slags tegnsett vi hadde lyst til å legge inn.

Metadataene vi setter i HTML head er også viktige for blant annet søkemotorer og [search engine optimization \(SEO\)](https://developer.mozilla.org/en-US/docs/Glossary/SEO). Ved å sette de følgende to elementene, gir vi god informasjon til crawlerne som skal indeksere siden om hva innholdet er.

```markup
<meta name="author" content="Bjarne Betjent">
<meta name="description" content="Livet på Sesam Stasjon">
```

Det finnes mye annen informasjon man kan legge som metadata, for eksempel bildet og beskrivelsen du har lyst til at skal komme opp hvis noen deler siden din på Facebook. Det lille bildet man får øverst i fanen på en nettside (favicon) settes også i head. Alle mulighetene finner du i MDN-dokumentasjonen vi lenket til øverst på denne siden.

## Body

Elementene som ligger som children til `body`-tagen er ganske enkelt det innholdet vi viser på siden. I [neste kapittel](03-semantikk.md) om semantikk lister vi opp en del av de ulike elementene man kan sette i body.

## Oppgaver

* Legg til en tittel på nettsiden din som vises i fanen \(taben\) i nettleseren.
* Legg til et lite bilde som også vises i fanen \(taben\). Dette bildet er ofte referert til som et favicon.



