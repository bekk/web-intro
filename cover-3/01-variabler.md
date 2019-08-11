# Variabler

{% hint style="info" %}
**Dokumentasjon fra MDN**

* [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
{% endhint %}

JavaScript er dynamisk typet, det vil si at vi ikke definerer hvilken type \(int, boolean, string\) en variabel er, slik man gjør i språk som Java og C\#. Typer bestemmes underveis når et program kjøres, noe som også betyr at den samme variabelen kan bli satt til flere forskjellige verdier og dermed ha hatt flere typer i løpet av kjøringen.

Det er tre måter å deklarere en variabel på i JavaScript, vist under, og av disse anbefaler vi at du bruker enten `let` eller `const`.

```javascript
var a = 1;
let b = 1;
const c = 1;
```

`const` brukes om alle konstanter som ikke skal endre seg senere. Resten av variablene burde deklareres med `let`, som indikerer at innholdet kan endre seg over tid.

**OBS!** Glemmer du å deklarere en variabel med `var`, `let` eller `const`, vil variabelen være global.

{% hint style="info" %}
Du finner flere gode grunner til å velge `let` og `const` over `var` i avsnittene under. Men en annen fordel med `let` og `const` er at du kommuniserer til andre som leser koden hva som er meningen med en variabel. Skal den kunne endres eller ikke?
{% endhint %}

## Var

Før 2015 ble alle variabler i JavaScript deklarert som `var`, og er det vi kaller function scoped. Function scoped betyr at uavhengig av hvor variabelen blir deklarert, vil det være ekvivalent med å deklarere den på toppen. Dette fenomenet er kjent som [var hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var#var_hoisting), og har gjennom JavaScript sin historie forårsaket en del [uventet oppførsel](http://ignaciothayer.com/post/a-dangerous-example-of-javascript-hoisting/), særlig når looper har vært involvert. Dette er også bakgrunnen for at `let` og `const` er anbefalt å bruke til variabeldeklarasjon etter at det ble del av JavaScript-standarden i 2015.

Her er noen eksempler på hvordan `var` fungerer:

```javascript
var n = 1;

if (true) {
    n; // 1
}

n; // 1
```

```javascript
if (true) {
    var n = 1;
}

n; // 1
```

```javascript
if (false) {
    var n = 1;
}

n; // undefined
```

## Let

`let` oppfører seg nesten som `var`, og gir oss en variabel vi kan sette flere ganger. Forskjellen ligger i at `let` er block scoped. Det vil si at vi får en kjørefeil hvis vi forsøker å aksessere variabelen utenfor blokken den ble deklarert i, og slipper å forholde oss til at variabelen er tilgjengelig i hele funksjonen.

```javascript
if (true) {
    var x = true;
}

x; // true

if (true) {
    let y = true;
}

y; // ReferenceError: y is not defined
```

Let kan også brukes i konstruerte \(fake\) scopes, med samme oppførsel:

```javascript
{
    let x = true;
}

x; // ReferenceError: x is not defined
```

## Const

På samme måte som `let`, er `const` også block scoped:

```javascript
if (true) {
    const x = true;
}

x; // ReferenceError: x is not defined
```

Men hvis vi deklarerer en variabel med `const`, er det ikke mulig å tildele den noen ny verdi etter initiering, eller redeklarere den:

```javascript
const x = 'I am a const';
x = 'Can not change you?'; // TypeError: Assignment to constant variable.
```

Innholdet kan forøvrig fortsatt endres, siden det kun er referansen som er uforanderlig - en liste kan ikke plutselig bli satt til å være et tall eller en annen liste, men man kan fortsatt legge til elementer i den:

```javascript
const arr = [1, 2];
arr[0] = 0;

arr[0]; // 0
```

## Oppgaver

* [let](https://jsbin.com/tehakud/edit?html,js,output)
* [const](https://jsbin.com/punetoxase/1/edit?js,output)

