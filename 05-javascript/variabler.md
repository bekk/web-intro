# Variabler

JavaScript er dynamisk typet, det vil si at vi ikke definerer hvilken type (int, boolean, string) en variabel er, slik man gjør i språk som Java og C#.

Vi har tre måter å deklarere en variabel på i JavaScript, og av disse anbefaler vi at du benytter `let` og `const` så langt det er mulig:

```javascript
var a = 1;
let b = 1;
const c = 1;
```
**OBS!** Glemmer du å deklarere en variabel med `var`, `let` eller `const`, vil variabelen være global.

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

## Const
