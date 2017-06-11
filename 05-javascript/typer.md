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

## Operatorer

## Oppgaver
* [Sett verdier i et objekt](https://jsfiddle.net/ingvilin/DuYAc/104/)
