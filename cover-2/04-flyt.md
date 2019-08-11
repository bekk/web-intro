# Flyt

## Display

CSS-egenskapen `display` sier noe om hvordan et element skal legge seg i flyten på siden. Med flyten mener vi rekkefølgen på elementene i leseretning, fra øverst i venstre hjørne til nederst i høyre hjørne. Hvis man ikke definerer noe annet vil to sekvensielle HTML-elementer legge seg i den rekkefølgen de er definert i HTML-strukturen.

Nederst i [delen om HTML-elementer](https://github.com/bekk/web-intro/tree/645b85b7c83346bcb1576cba234407c4d12e6175/03-css/02-html/01-elementer.md) beskrev vi hvordan block- og inline-elementer oppfører seg. De forskjellige HTML-elementene har alle forskjellig default-verdi for `display`, som man kan se i følgende CodePen \(Klikk "Run pen"\):

{% embed data="{\"url\":\"https://codepen.io/johhorn/pen/XPMBvr \",\"type\":\"rich\",\"title\":\"Flyt: Html-elementer\",\"description\":\"...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://codepen.io/favicons/favicon-192x192.png\",\"width\":192,\"height\":192,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://s3-us-west-2.amazonaws.com/m.cdpn.io/screenshot-coming-soon-small.png\",\"width\":400,\"height\":225,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"app\",\"url\":\"https://codepen.io/johhorn/embed/preview/XPMBvr?height=300&slug-hash=XPMBvr&default-tabs=html,result&host=https://codepen.io&embed-version=2\",\"html\":\"<iframe src=\\\"https://codepen.io/johhorn/embed/preview/XPMBvr?height=300&amp;slug-hash=XPMBvr&amp;default-tabs=html,result&amp;host=https://codepen.io&amp;embed-version=2\\\" style=\\\"border: 0; width: 100%; height: 300px;\\\" allowfullscreen></iframe>\",\"height\":300,\"aspectRatio\":null}}" %}

## Midtstilling

Med `text-align` kan vi velge om tekst skal være venstre-, midt- eller høyrejustert innenfor et block-element \(klikk på CSS-fanen for å se stylingen som appliseres\):

{% embed data="{\"url\":\"https://codepen.io/johhorn/pen/yxMxBw\",\"type\":\"rich\",\"title\":\"Text-align\",\"description\":\"...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://codepen.io/favicons/favicon-192x192.png\",\"width\":192,\"height\":192,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://s3-us-west-2.amazonaws.com/m.cdpn.io/screenshot-coming-soon-small.png\",\"width\":400,\"height\":225,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"app\",\"url\":\"https://codepen.io/johhorn/embed/preview/yxMxBw?height=300&slug-hash=yxMxBw&default-tabs=css,result&host=https://codepen.io&embed-version=2\",\"html\":\"<iframe src=\\\"https://codepen.io/johhorn/embed/preview/yxMxBw?height=300&amp;slug-hash=yxMxBw&amp;default-tabs=css,result&amp;host=https://codepen.io&amp;embed-version=2\\\" style=\\\"border: 0; width: 100%; height: 300px;\\\" allowfullscreen></iframe>\",\"height\":300,\"aspectRatio\":null}}" %}

`div` er et block-element og teksten blir midtstilt, men siden `span` er et inline-element kan vi ikke posisjonere tekst innenfor elementet, det har rett og slett ikke noe ledig rom rundt seg det kan plassere seg relativt til.

Hvis vi vil midtstille et element innenfor sitt forelder-element kan vi bruke automatisk `margin` til høyre og venstre for elementet, sammen med en forhåndsdefinert bredde, slik at nettleseren kan regne seg frem til hvor mye plass marginen kan ha:

{% embed data="{\"url\":\"https://codepen.io/johhorn/pen/jvBvPX\",\"type\":\"rich\",\"title\":\"Margin: auto\",\"description\":\"...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://codepen.io/favicons/favicon-192x192.png\",\"width\":192,\"height\":192,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://s3-us-west-2.amazonaws.com/m.cdpn.io/screenshot-coming-soon-small.png\",\"width\":400,\"height\":225,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"app\",\"url\":\"https://codepen.io/johhorn/embed/preview/jvBvPX?height=300&slug-hash=jvBvPX&default-tabs=css,result&host=https://codepen.io&embed-version=2\",\"html\":\"<iframe src=\\\"https://codepen.io/johhorn/embed/preview/jvBvPX?height=300&amp;slug-hash=jvBvPX&amp;default-tabs=css,result&amp;host=https://codepen.io&amp;embed-version=2\\\" style=\\\"border: 0; width: 100%; height: 300px;\\\" allowfullscreen></iframe>\",\"height\":300,\"aspectRatio\":null}}" %}

{% hint style="info" %}
**Tips!**

Som dere snart vil finne ut, er det flere egenskaper som bare fungerer på block- eller inline-block-elementer. Dette gjelder både `text-align`, som forklart over, i tillegg til `margin` over og under et element. Dette kan være en kilde til vanskelig debugging når stilene våre tilsynelatende ikke treffer. Heldigivs pleier DevTools i nettleseren å vise oss hvilke stiler som ikke fungerer fordi de vises som ugyldige i Styles-panelet når vi inspiserer koden vår.
{% endhint %}

## Posisjonering

Åpne følgende codepen ved å trykke på "Edit on CodePen" øverst i høyre hjørne:

{% embed data="{\"url\":\"https://codepen.io/johhorn/pen/wEJEMx\",\"type\":\"rich\",\"title\":\"Posisjonering\",\"description\":\"...\",\"icon\":{\"type\":\"icon\",\"url\":\"https://codepen.io/favicons/favicon-192x192.png\",\"width\":192,\"height\":192,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://s3-us-west-2.amazonaws.com/m.cdpn.io/screenshot-coming-soon-small.png\",\"width\":400,\"height\":225,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"app\",\"url\":\"https://codepen.io/johhorn/embed/preview/wEJEMx?height=300&slug-hash=wEJEMx&default-tabs=css,result&host=https://codepen.io&embed-version=2\",\"html\":\"<iframe src=\\\"https://codepen.io/johhorn/embed/preview/wEJEMx?height=300&amp;slug-hash=wEJEMx&amp;default-tabs=css,result&amp;host=https://codepen.io&amp;embed-version=2\\\" style=\\\"border: 0; width: 100%; height: 300px;\\\" allowfullscreen></iframe>\",\"height\":300,\"aspectRatio\":null}}" %}

Elementene har statisk posisjon. Det betyr at de plasseres slik de ligger i HTMLen og ikke blir påvirket av posisjonsegenskapene `top`, `right`, `left`, `bottom` og `z-index`.

Endre element B til å ha `position: relative`. Relativ posisjon betyr at elementet ligger på sin statiske posisjon, men at endringer i posisjonsegenskapene vil få elementet til å flytte seg _relativt til sin egen posisjon_. Sett verdiene `top` og `left` for element B til å være 15px. Ser du noen forskjell? Legg merke til at C ikke flytter på seg. Den opprinnelige avholdte plassen til B er den samme som før.

Endre nå element B til å ha `position: absolute`. Hvor ble elementet av? Med absolutt posisjon vil elementet forholde seg til posisjonsegenskapene `top`, `left` osv innenfor nærmeste posisjonerte forelder - eller rotelementet. Med absolutt posisjon blir det ikke holdt av plass til element B mellom A og C.

Se på `article`-elementet som ligger rundt A, B og C. Gi den `position: relative`. Hvor ble nå B av? Nå som `article` er posisjonert vil B forholde seg til den i stedet for rotelementet.

## Oppgaver

* [Midtstilling](https://jsfiddle.net/Matsemann/wg8oLh8a/)
* [Posisjonering](https://jsfiddle.net/Matsemann/b75wz3mj/1/)

