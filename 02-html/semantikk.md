Semantikk betyr at typen til en HTML-tagg sier noe om hva slags innhold den har.

Før brukte vi ofte bare div og span til å bygge en side. Med HTML5 fikk vi mye
mer

html, body, div, span, h1, a, p, ... wtf

Hovedregel er at alle tagger trenger åpne / lukke<br>
Kun elementer som ikke **kan** ha innhold avsluttes dirrekte

Semantiske
```html
<header></header>
  <nav></nav>
  <main></main>
  <footer></footer>
  <h1></h1>
  <p></p>
  <a></a>
  <button></button>
```

Ikke-Semantiske
Har fortsatt nytte: styling. Men sier ikke noe om det semantiske, 
```html
  <div></div>
  <span></span>
```

https://developer.mozilla.org/en/docs/Web/HTML/Element
