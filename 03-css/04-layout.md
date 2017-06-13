# Avansert layout

> **MDN**:
* [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
* [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

Hvis man synes `position: relative` blir for mye knot og at `position: static` blir for kjedelig, kan man knalle til med skikkelig avansert layout á la 2017.

> Layout er et stort nok tema til at vi kunne ha brukt hele dagen på en egen [layoutworkshop](https://github.com/kentandersen/layout-workshop). Ta gjerne en titt på den - slidene er også fine for eksempler på hvordan diverse css-properties oppfører seg.

Innenfor layout har det vokst frem mange spennende muligheter. Flexbox og CSS grid er nye måter å løse avansert layout på utviklervennlige måter. I vår mening er en av de beste måtene å lære seg hvordan de funker, å ta dem i bruk.

## Oppgaver
* [Flexbox Froggy](http://flexboxfroggy.com/) er en klassiker. Her lærer du å bruke flexbox for å redde Froggy til vannliljen sin.

* [Flexbox Defense](http://www.flexboxdefense.com/) er også et spill der man lærer flexbox. Dette er et tower defense-spill der du beskytter tårnet ditt med CSS!

* [CSS Grid Garden](http://cssgridgarden.com/) er et spill for å lære CSS grid layout - noe av det ferskeste innen CSS, som ble støttet i de største nettleserne så nylig som i mars 2017! Her skal vi passe på gulrothagen vår med CSS.

* Har du ikke fått nok av layout? Ta for deg HTMLen under - lag en HTML-fil `nedteller.html` med tilhørende CSS-fil `nedteller.css`. Gi `main`-elementet en bredde og midtstill det. Midtstill teksten til telleren. Bruk flexbox på `div`-en med alle knappene (`.buttons`) for å få knappene til å ligge som vist på bildet nederst. Midtstill og style start-knappen.

```html
<html>
<head>
  <meta charset="utf-8">
  <title>Nedteller</title>
  <link rel="stylesheet" type="text/css" href="nedteller.css">
</head>
<body>
  <main>
    <output>0</output>
    <div class="buttons">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>0</button>
    </div>
    <button class="startbutton">Start</button>
  </main>
</body>
</html>
```

![Nedteller](../resources/nedteller.png)
