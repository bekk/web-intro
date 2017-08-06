# Promises

> **MDN**: [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Noen ganger trenger vi å gjøre en asynkron operasjon (en oppgave som ikke fullfører umiddelbart) uten at vi vil stå og vente på at den blir gjort. Vi vil kunne kaste en boomerang og få beskjed når den er tilbake. Da er det nyttig med **Promises**.

> Tenk deg at du ber den svært lydige hunden din om å hente avisen og den løper avgårde. Inntil den kommer tilbake vet du ikke om du får en avis eller ikke - du vet at den utfører en oppgave men ikke om det blir en suksess. I mellomtiden har oppgaven en _ventende_ tilstand. Vi har to utfall: hunden din kommer tilbake med avisen din - oppgaven er _løst_, eller hunden din kommer tilbake med en pinne - oppgaven er _feilet_. Mens du venter på hunden din, ønsker du å kunne fortsette med å gjøre andre ting, f.eks. sette på kaffen og lage deg frokost.

Et Promise er et objekt som vi gir en asynkron oppgave å gjøre, det returnerer en referanse umiddelbart, og når den asynkrone oppgaven er gjort vil objektet holde resultatverdien.

Når vi oppretter et Promise-objekt sender vi inn en anonym funksjon med ett eller to argumenter. Den anonyme funksjonen skal utføre en oppgave for oss. Argumentene den får inn er funksjonene som skal kjøres når den asynkrone oppgaven har fullført eller har feilet. Ofte kalles disse `resolve` og `reject`, men egentlig kan du kalle dem `ja` og `nei` eller `hurra` og `oops` om du heller vil det.

Prøv å lime inn dette eksempelet i JavaScript-konsollen i DevTools og følg med på at svaret kommer:

```js
const siHeiOmToSekunder = new Promise(resolve => {
  setTimeout(() => resolve('Hei!'), 2000);
});

siHeiOmToSekunder.then(melding => {
  console.log(`Fikk et svar: ${melding}`);
});
```

Et Promise lar deg jobbe videre uten å måtte stå og vente på svar. Vi kan fortelle det hva den skal gjøre når den er ferdig, og så gå videre med det vi gjør. En vanlig use case er når vi skal hente inn data fra et [web-API](/05-javascript/09-web-api.md) og ikke vet hvor lang tid det tar før APIet svarer. Da kan vi sende en forespørsel og vite at vi får beskjed når den enten blir besvart eller feiler.

## Oppgaver
* [Promise](http://tddbin.com/?636#?kata=es6/language/promise/basics)
* [Lenkede promises](http://tddbin.com/?464#?kata=es6/language/promise/chaining-then)
* [Promise-APIet](http://tddbin.com/?889#?kata=es6/language/promise/api)
