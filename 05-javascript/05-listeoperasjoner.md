# Listeoperasjoner

> **MDN**:
* [Oversikt over alle listeoperasjoner](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map?v=control)
* [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce?v=control)
* [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter?v=control)
* [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)


Fra skolebenken er vi veldig vant med å bruke for-loops når vi ønsker å modifisere lister.
I JavaScript har vi en del innebygde listeoperasjoner som er gode å lese, som vi anbefaler å bruke i stedet for å skrive en egen listeiterasjon. Enkelte av disse er også funksjonelle - det vil si, endrer ikke den opprinnelige listen du kaller listeoperasjonen på, men returnerer en ny liste. Det er ofte en fordel å bruke funksjonelle prosedyrer, fordi de ikke har [sideeffekter](https://en.wikipedia.org/wiki/Side_effect_(computer_science), og kan gjøre programmet ditt forutsigbart og mulig å teste. Under har vi lagt inn eksempler noen funksjonelle listeoperasjoner som er fine  å kjenne til, men det finnes mange flere i MDN sin oversikt over listeoperasjoner som er praktiske å bruke i ulike situasjoner i stedet for loops.

## Map
Map returnerer en ny liste med resultatet av å kalle funksjonen vi sender inn til map på hvert element i lista map ble kalt på.

```js
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);

console.log(roots)    // [1, 2, 3]
console.log(numbers); // [1, 4, 9]

```

## Reduce
Reduce kaller en funksjon på alle elementer i en liste mot en akkumulator, slik at vi kan redusere lista til en enkeltverdi.

```js
const numbers = [1, 2, 3];
const sum = list.reduce(
	(accumulated, current) => accumulated + current, // anonym funksjon
	0 // basisverdi
);

console.log(sum);     // 6
console.log(numbers); // [1, 2, 3]
```

## Filter
Filter tar inn en funksjon som returnerer en boolsk verdi (denne typen funksjon kalles et predikat), og returnerer en ny liste med elementene i den opprinnelige lista som returnerte  `true` når de ble testet mot predikatet.


```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
const isOdd = (num) => num % 2;
const odd = numbers.filter(isOdd);

console.log(odd);     // [1, 3, 5, 7]
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
```

## Spread operator
Du kan bruke spread operator både på lister og objekter, til å hente ut alle elementene i lista.

Dette er praktisk hvis man for eksempel vil flate ut to lister i en ny liste:

```js
const arr1 = [0, 1, 2];

console.log(...arr1)  // 0, 1, 2

const arr2 = [3, 4, 5];
const arr3 = [...arr1, ...arr2];

console.log(arr1);    // [0, 1, 2]
console.log(arr2);    // [3, 4, 5]
console.log(arr3);    // [0, 1, 2, 3, 4, 5]
```
