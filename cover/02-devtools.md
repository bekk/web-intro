---
description: >-
  Ved å høyreklikke på en nettside og velge "Inspect element", eller å trykke
  cmd+alt+i, får du opp utviklerverktøyene (DevTools) i Chrome.
---

# DevTools

**Gode ressurser:**
* [Dokumentasjonen for DevTools i Chrome](https://developers.google.com/web/tools/chrome-devtools/) er veldig bra, så ta gjerne en titt på den for å lese mer om mulighetene i DevTools, og om de andre fanene vi ikke har beskrevet her.
* [Noen kule tips og triks til DevTools i Chrome](https://medium.freecodecamp.org/cool-chrome-devtools-tips-and-tricks-you-wish-you-knew-already-f54f65df88d2?source=linkShare-d0807c085137-1534676644)
* [Firefox har også DevTools](https://developer.mozilla.org/son/docs/Tools)
* Alternativt kan man laste ned [developer edition](https://www.mozilla.org/en-US/firefox/developer/) av Firefox

## Elements

I DevTools-fanen "Elements" kan vi inspisere nettsiden vi er på, og se hvordan den har blitt rendret. Vi kan gjøre midlertidige endringer i både HTML og CSS for å se hvordan resultatet vil bli i nettleseren, og vi kan se hvordan brukerens oppførsel på en dynamisk side påvirker innholdet.

Inspiser `p`-elementet i `hello.html` og åpne "Styles"-panelet under "Elements". Under "element.style" kan vi legge til og teste vår egen CSS. Legg til en bakgrunnsfarge og bredde ved å skrive noe tilsvarende dette:

```text
width: 50%;
background-color: cadetblue;
```

Legg merke til at du får opp autocomplete av både attributter og verdier. Om du trykker på den fargede boksen ved siden av fargeverdien får du opp en avansert fargevelger som bl.a. lar deg plukke en farge fra nettsiden du inspiserer.

Nå kan du dra i DevTools-vinduet for å gjøre det bredere eller smalere, og se hvordan nettsiden tilpasser seg bredden.

## Console

Fanen "Console" gir deg konsoll-output fra nettsiden. Om man f.eks. skriver `console.log('Hei hei')` i javascript som ligger på nettsiden, vil "Hei hei" skrives til "Console"-fanen når koden kjøres. Du kan også se på denne fanen som en slags javascript-sandbox, der du kan teste kodesnutter for å se om de fungerer som du tenker.

## Sources

I "Sources"-fanen kan du se hvilke filer som lastes inn sammen med nettsiden. Om du jobber med lokale filer kan du gjøre endringer direkte i denne fanen, se hvordan det påvirker nettsiden og deretter lagre endringene dine. Dersom filene ligger på en annen server kan du allikevel lese dem og gjøre lokale endringer for å se hvordan nettsiden påvirkes, lage breakpoints og legge inn logging for å debugge.

## Network

"Network"-fanen lar deg se på nettverkstrafikken som genereres av nettsiden, for eksempel for å se på hvilke API-kall som gjøres, eller se hva resultatet av en spørring er. Du kan også se på tidsbruken under innlasting av siden, og bruke throttling for simulere dårligere nedlastingshastigheter.

