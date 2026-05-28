# Box model

{% hint style="info" %}
**Dokumentasjon fra MDN**: [CSS Box Model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)
{% endhint %}

## Box model

The box model er en modell som beskriver plassen et element tar opp, og hvordan plassen skal brukes. Med andre ord: hvordan elementet skal pakkes inn.

I DevTools under Elements er det en fane som heter "Computed" - den viser oss de beregnede verdiene for stylingen for elementet som inspiseres i DOM-en. Der finner vi også en visuell fremstilling av elementets Box Model som er veldig nyttig under debugging:

![CSS Box Model](../.gitbook/assets/box-model.png)



## Box sizing

Box-sizing er en css-property som sier noe om hvordan vi skal regne ut bredde og høyde på et element, og vil påvirke hvordan elementene våre oppfører seg når de ligger inni hverandre. For en demonstrasjon av hvordan dette påvirker et element, se [MDN-dokumentasjonen](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) om box-sixing.

## Oppgave

Lag en liten boks på 300x100px. Legg følgende css og html inn i filene du har satt opp:

{% code-tabs %}
{% code-tabs-item title="index.css" %}
```css
.min-boks {
    width: 300px;    
    height: 100px;    
    padding: 0px;    
    border: 0px solid gray;    
    margin: 0px;
    background-color: cadetblue;
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}

{% code-tabs %}
{% code-tabs-item title="index.html" %}
```markup
<div class="min-boks">Lorem ipsum</div>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Endre på verdiene for å se hvordan boksens grenser defineres:

1. Sett propertyen `padding`  til `20px` og se hvordan størrelsen endrer seg.
2. La oss endre på bredden på `border` til `15 px solid gray` for å se hva dette gjør.
3. Dupliser boksen i `index.html`, så vi har to bokser, for å se hvor boksens ytre grenser går.
4. Endre `margin` til `5px` for å se hvordan vi kan lage et usynlig skjold utenpå boksen som holder andre elementer unna



