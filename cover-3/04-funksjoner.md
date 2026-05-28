# Funksjoner

{% hint style="info" %}
**Dokumentasjon fra MDN:**

* [Function statements \(function declarations\) ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
* [Function expressions ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function)
* [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
{% endhint %}

Man kan definere en funksjon i JavaScript på ulike måter, som igjen kan gi ulik oppførsel. Sjekk MDN-dokumentasjonen vi har lenket til øverst for å bli kjent med hva som skiller dem fra hverandre og ikke minst _hvorfor_ de oppfører seg sånn.

```javascript
// Function statement
function myFunction() {}

// Function expression
const myFunction = function() {};

// Arrow function
const myFunction = () => {};
```

## Arrow functions

Arrow functions er kanskje syntaksen som er mest fremmed av måtene man kan definere funksjoner på over, sammenliknet med hvordan funksjoner deklareres hos en del andre programmeringsspråk. De er kortere, og dermed mer lesbare i enkelte situasjoner, som her hvor vi sender en anonym funksjon\* inn til map\*\*:

```javascript
// Her er callbacken til map en klassisk funksjonsdeklarasjon
[1, 2, 3].map(function(n) {
    return n * 2;
});

// Her er callbacken til map en arrow function
[1, 2, 3].map(n => n * 2);
```

> \*En [anonym funksjon](https://en.wikipedia.org/wiki/Anonymous_function) er en funksjon som bare finnes akkurat der den er definert, og som ikke er bundet til noen variabel.
>
> \*\*Du kan lese mer om `map`-funksjonen som brukes over i seksjonen om nyttige [listeoperasjoner](https://github.com/bekk/web-intro/tree/645b85b7c83346bcb1576cba234407c4d12e6175/05-listeoperasjoner.md).

## Oppgaver

* [Arrow functions](https://jsbin.com/deliri/5/edit?js,console)

