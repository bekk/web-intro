# Typer og operatorer

> **MDN**:
* [Data types and data structures ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

JavaScript har syv datatyper:
* boolean
* null
* undefined
* number
* string
* symbol
* Object

Særlig bruken av null og undefined er en [kilde til forvirring](https://stackoverflow.com/questions/461966/why-is-there-a-null-value-in-javascript) i JavaScript-verdenen.

Vi kan bruke **typeof**-operatoren for å sjekke type:
```javascript
    typeof {};          // 'object'

    typeof [];          // 'object'     WTF?

    typeof 1;           // 'number'

    typeof '';          // 'string'

    typeof true;        // 'boolean'

    typeof false;       // 'boolean'

    typeof minVar       // 'undefined'

    typeof null;        // 'object'     WTF?
```

Objekter kan ses på som en samling av key-value-par.

```javascript
    var obj = {
      key1: 'value1',
      key2: 13,
      navn: 'olav'
    };

    obj.key1;         // 'value1'
    obj['key2'];      // 13
    obj.key3;         // undefined

    delete obj.key1;
    obj.key1;         // undefined
```

I JS kan man bare slenge på og ta bort et key-value-par som man ønsker, runtime. Dette skiller seg ganske mye fra kompilerte språk som feks Java, hvor man typisk først må lage en klasse og definert at objekter av denne typen vil ha disse feltene.

Denne fleksibiliteten i JavaScript gjør det lett å referere til felter som ikke finnes og kan dermed skape trøbbel.

## Truthy and falsy
På MDN sine sider finner dere lister og dokumentasjon for alt av operatorer som finnes i JS. Men operatorene for sammenlikning er verdt litt ekstra oppmerksomhet, fordi JS i en boolsk kontekst sjekker om en verdi er [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) eller [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). Hvis man i Java sjekker om to ting er like med `==`, er det en strikt likhetssjekk. I JavaScript, derimot, kan uttrykket bli evaluert til truthy og passere i en if-sjekk. Derfor bør man i sammenlikninger bruke strict equal og strict not equal-operatorene `===` og `!==` for å unngå logiske feil under kjøring.

```js
// Evaluerer til true
if ('En hvilken som helst streng')
if (-1)
if (3)
if (6 == '6')

// Evaluerer til false
if (0);
if (undefined);
if (null);
if (6 === '6')

```

## Oppgaver
* [Sett verdier i et objekt](https://jsfiddle.net/ingvilin/DuYAc/104/)
