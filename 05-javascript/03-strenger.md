# Strenger

Vi kan deklarere en ren streng på to måter:
```javascript
const dobbeltfnutter = "JavaScript";
const enkeltfnutter  = 'JavaScript';
```

Det er tilsynelatende vanlig i JS-verdenen å bruke enkeltfnutter til strenger, men [de lærde strides om hva som er best](https://stackoverflow.com/questions/242813/when-to-use-double-or-single-quotes-in-javascript). Uansett hva dere velger å ha på ditt prosjekt, er det viktigst å være konsekvent i hvordan dere bruker det gjennom prosjektet.

## Template strings
Det finnes to måter å lage en streng med variabler:
```javascript
// Gammeldags: Konkatenere strenger og variabler med +
var text1 = 'Hei, ' + name + ', hvordan går det?';

// Fremtiden: Template strings
var text2 = `Hei, ${name}, hvordan går det?`;
```
Template strings har fordelen at du ikke trenger å bekymre deg for hvordan du skal få linjeskift inn i strengen og er enklere å lese.

```javascript
  var str = `Her
             var

             det masse
             fine

             linjer!!
  `
```
Koden over blir rendret som følgende, med både linjeskift og indentering intakt:

```text
  Her
             var

             det masse
             fine

             linjer!!
```

## Oppgaver
* [String basics](http://tddbin.com/#?kata=es6/language/template-strings/basics)
* [String multiline](http://tddbin.com/#?kata=es6/language/template-strings/multiline)
