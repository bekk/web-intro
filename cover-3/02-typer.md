# Typer og operatorer

{% hint style="info" %}
**Dokumentasjon fra MDN**:

* [Data types and data structures ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
* [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
{% endhint %}

## Datatyper

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
typeof {}; // 'object'

typeof []; // 'object'     WTF?

typeof 1; // 'number'

typeof ''; // 'string'

typeof true; // 'boolean'

typeof false; // 'boolean'

typeof minVar; // 'undefined'

typeof null; // 'object'     WTF?
```

Objekter kan ses på som en samling av key-value-par.

```javascript
const obj = {
    key1: 'value1',
    key2: 13,
    navn: 'olav',
};

obj.key1;    // 'value1'
obj['key2']; // 13
obj.key3;    // undefined

delete obj.key1;
obj.key1;    // undefined
```

I JS kan man bare slenge på og ta bort et key-value-par som man ønsker, runtime. Dette skiller seg ganske mye fra kompilerte språk som feks Java, hvor man typisk først må lage en klasse og definert at objekter av denne klassen vil ha et sett med attributter. Vi kan sette verdier på tre måter: når vi initialiserer objektet, og ved å aksessere gjennom nøkler. Dersom vi bruker en nøkkel som ikke finnes i objektet fra før, vil det legges til:

```javascript
const bil = {
    seter: 3,
};

bil.merke = 'Toyota';
bil['år'] = '1994';
```

Denne fleksibiliteten i JavaScript gjør det lett å referere til felter som ikke finnes, noe som raskt kan skape trøbbel. Husk også at slike feil ikke fanges opp før de eksekveres i nettleseren, med mindre vi bruker verktøy som legger til kompilering med typesjekk.

## Truthy and falsy

På MDN sine sider finner dere dokumentasjon for alt av operatorer som finnes i Javascript. Men operatorene for sammenlikning er verdt litt ekstra oppmerksomhet, fordi JS i en boolsk kontekst kan sjekke om en verdi er [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) eller [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). Hvis man i Java sjekker om to ting er like med `==`, er det en strikt likhetssjekk. I JavaScript, derimot, kan uttrykket bli evaluert til truthy og passere i en if-sjekk der vi egentlig forventer å få `false` tilbake. Derfor bør man i sammenlikninger bruke strict equal og strict not equal-operatorene `===` og `!==` for å unngå logiske feil under kjøring.

```javascript
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

## Destrukturering

Fra andre programmeringsspråk er man gjerne vant med å aksessere variabler og funksjoner på et objekt med dot-notasjon:

```javascript
const artist = {
    navn: 'Taylor Swift',
    syng: () => 'Lalalala',
};

console.log(artist.navn); // Taylor Swift
console.log(artist.syng()); // Lalalala
```

I stedet for å dotte oss til et attributt på et objekt, kan vi bruke destructuring assignment. Dette kan vi bruke både for arrays og objekter, men kan være særlig hendig for å hente ut verdier fra sistnevnte:

```javascript
const { navn, syng } = artist;

console.log(navn); // Taylor Swift
console.log(syng()); // Lalalala
```

## Oppgaver

* [Sett verdier i et objekt](https://jsbin.com/doqimip/2/edit?js,output)

