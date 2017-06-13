# HTML-elementer

> **MDN**:
* [Liste over alle tilgjengelige HTML-elementer](https://developer.mozilla.org/en/docs/Web/HTML/Element)
* [Block level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
* [Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)

HTML-dokumenter inneholder en rekke elementer som enten er self closing, altså lukker seg selv, eller som har underelementer, ofte referert til som `children`, og/eller closing tags:
```html
<tag />

<tag>Innhold (child)</tag>

<tag>
  <tag>
    Man kan ha mange underelementer (children) under en tag.
  </tag>
  <tag>
    Så mange man vil, faktisk.
  </tag>
</tag>
```

I denne settingen er ikke `tag` et faktisk HTML-element, men en placeholder for alle de mulige HTML-elementene som finnes - se lenken øverst for en oversikt.

## Attributter
Et HTML-element kan ha flere attributter som bestemmer hvordan den skal oppføre seg eller se ut:

```html
<tag
    attribute1="value1"
    attribute2="value2"
>
    Innhold
</tag>
```
## Block og inline
HTML-elementer er gjerne enten _block-level_ eller _inline_.
Block-level innebærer at elementer begynner på en ny linje, mens inline-elementer kan starte hvor som helst på en linje.
Mange browsere har ny linje både før _og_ etter block-level-elementer, så man kan forestille seg disse elementene som et tårn med bokser som ligger oppå hverandre.

```html
<p>This <span>span</span> is an inline element; its background has been colored to display both the beginning and end of the inline element's influence</p>

<p>This paragraph is a block-level element; its background has been colored to display the paragraph's parent element.</p>
```

```css
p { background-color: #8ABB55; }
```
<p>This <span style="background-color: #8ABB55">span</span> is an inline element; its background has been colored to display both the beginning and end of the inline element's influence</p>

<p style="background-color: #8ABB55">This paragraph is a block-level element; its background has been colored to display the paragraph's parent element.</p>
