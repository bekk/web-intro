# DOM-apiet

> **MDN**:
* [Oversikt over DOM- og HTML-interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Javascript gir oss et rikt API mot [DOMen](01-intro-til-weben/03-dom.md) via document-objektet.
Hvis HTML-en inneholder dette...
```html
    <img id="mainpicture" src="http://placekitten.com/200/300">
```
... så kan vi aksessere den slik:

```js
  var img = document.querySelector('#mainpicture');
```

```html
<div id="boks">
    <a href="mer.html">Klikk her</a> for å lære mer
</div>
```

```javascript
var boks = document.querySelector('#boks');
```

```javascript
  boks.innerHTML; // <a href="mer.html">Klikk her</a> for å lære mer
```

```javascript
  boks.textContent; // Klikk her for å lære mer
```
## Oppgave
Fortsett med knappene du lagde i [kapittel 2](../02-html/06-knapper).
* Legg til unike `id`-attributter på `output` og `button`-elementene.
* Legg til en click event handler som legger til 1 på tallet i `output` når man trykker på plussknappen.
* Legg til en click event handler som trekker fra 1 fra tallet i `output` når man trykker på minusknappen.
