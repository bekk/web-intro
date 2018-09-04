# Dytt det til skyen!

Så nå har vi satt opp verdens minste nettside som består av bare én HTML-side Men hadde det ikke vært gøy å legge den ut så du kan dele den med hvem som helst som har tilgang på internett!? Ikke noe som å vise stolt frem ting man har laget til venner og familie 😌

## Sett opp versjonskontroll på koden

Når vi utvikler er det greit å ha versjonskontroll på koden vår, og [Git](https://git-scm.com/) er bransjestandarden alle bruker i dag. Versjonskontroll er ikke bare bra for å finne tilbake til fordums kodetider gjennom en super historikk, men brukes også aktivt når vi utvikler kode sammen i team, ved at vi oppretter pull requests og har [code review](../cover-7/code-review.md) før koden blir merget inn.

Hvilken plattform man ønsker å lagre det på kan man velge selv, men i Bekk bruker vi ofte [BitBucket](https://bitbucket.org/), [GitHub](https://github.com/) eller [VSTS](https://visualstudio.microsoft.com/team-services). I denne oppgaven lenker vi til ressurser for å få det på GitHub, men du står fritt til å velge en annen tilbyder

### 1. Opprett et nytt repository

Når du er innlogget på [GitHub](https://github.com/), naviger til forsiden og trykk på den grønne knappen det står "New repository" på. Pass på å gjøre det på din private bruker, og med mindre du betaler for den, kommer repoet til å være public og tilgjengelig for hvem som helst. Kall ditt nye repository det du vil. Ikke huk av for å opprette `README` eller `.gitignore` via grensesnittet i Github - dette skal vi snart gjøre fra terminal.

Siden du allerede har en mappe på maskinen din med filen vi har lyst til å versjonere, er det denne vi vil gjøre om til et git-repository, og vi kan følge oppskriften under overskriften **…or create a new repository on the command line.**

### 2. Først legger vi til en README med bare en header i repoet:

Fra terminal, kjør følgende kommando:

```text
echo "# MIN TITTEL" >> README.md
```

### 3. Også greit å ha med en \`.gitignore\`

Kjør ny kommando i terminal:

```text
echo ".DS_Store" >> .gitignore
```

I `.gitignore` legger vi filer vi ikke trenger å ta vare på, typisk midlertidige filer som \`.DS\_Store\` som dukker opp på macer i hytt og pine og andre filer vi ikke 

{% hint style="info" %}
**Tips!**

I større prosjekter trenger vi pakkehåndterere \(package managers\) som feks npm, som administrerer avhengigheter. Disse kan typisk lage kompilerte filer, som `node_modules` når man installerer avhengighetene, og dette trenger vi ikke å ha med i versjonskontroll, så vi ignorerer dem med `.gitignore`. Vær alltid obs på om det har dukket opp filer du ikke trenger å versjonere når du commiter til git!
{% endhint %}

Følgende verdier kan du legge inn i `.gitignore` nå med en gang:

```text
.DS_Store
.idea/
*.log
```

### 4. Så initialiserer vi mappen med git og legger til alle filene:

```text
git init
git add .
```

### 5. Og til slutt lager vi en initiell commit og dytter til remote

```text
git commit -m "first commit"
git remote add origin 
git@github.com:[BRUKERNAVN]/[REPOSITORYNAVN].git
git push -u origin master
```

Urlen til ditt nye repository står på siden du mest sannsynlig allerede er på inne på Github. Når du har pushet koden opp, har du offisielt introdusert versjonering på prosjektet ditt!

## Publiser koden på Heroku

  
Lag deg en bruker på [Heroku](https://heroku.com). Heroku er en skyplattform som er ganske enkel å komme igang med, og som vi skal lansere applikasjonen vår på.

{% hint style="info" %}
Det finnes mange andre gode skyleverandører der ute, ikke minst de tre store: AWS, Google Cloud og Azure. Når det gjelder små hobbyprosjekter, er Heroku og [Firebase](https://firebase.google.com) to veldig enkle og gode alternativer.&gt;&gt;\*\*Obs!\*\* Noen av tjenestene til andre skyleverandører, inkludert Firebase, er betal-tjenester, noe som ikke er nødvendig i de fleste hobbyprosjekter.
{% endhint %}

### 1. Lag en ny app

I høyre hjørne når du har logget deg inn på Heroku, er det en knapp med teksten "New". Trykk på denne og velg "Create new app". Velg et navn som ikke finnes allerede - det er ikke veldig farlig akkurat hva den heter. Du kan enkelt sette opp siden med et domene du har kjøpt senere. Det finnes mange tilbydere for domener og hosting, blant annet domeneshop.com, one.com og GoDaddy.

### 2. Endre navn på html-filen din

De fleste appene som kjører på Heroku er satt opp med rammeverk, og bruker gjerne webpack eller andre byggsystemer. Vår første lille nettside har ikke noe `package.json` eller kjører med node - alt vi trenger er å åpne html-fila. Men dette skjønner dessverre ikke Heroku uten en liten hack, fordi Heroku forventer en app med fullt byggoppsett - og det har vi droppet å ha i denne workshopen. Bytt navnet på html-filen din til `index.php` og dytt til master. Dette gjør at Heroku tror vi har en `php`-app, noe vi ikke har \(🤷‍♀️🤷‍♂️\) men da setter den opp et byggmiljø som gjør at vi får opp siden vår.

 Et lite triks for å bytte navn, er å kjøre følgende kommando i terminal der filen er:

```text
mv index.html index.php
```

{% hint style="info" %}
[Her](https://medium.com/@topspinj/deploying-plain-html-and-js-onto-heroku-4e24023c1d08) kan du lese om hvorfor vi må hacke til med `index.php`. Hvis du har et byggsystem på plass for appen din, trenger du heldigvis ikke å gjøre dette. [Her er en guide](https://devcenter.heroku.com/articles/node-best-practices) på hvordan du setter opp et lite node-prosjekt som kan deployes på Heroku. Alternativt kan man bruke [Create React App](https://github.com/facebook/create-react-app) som gir deg en liten React-app med webpack-bygg.
{% endhint %}

### 3. Koble appen til GitHub.

Gå til fanen "Deploy" inne på Heroku-appen din, hvis du ikke er der allerede. Som du ser er det flere måter man kan sette opp deploy, men den aller mest sømløse er å koble til GitHub. Titt gjerne på hva som dukker opp av instruksjoner hvis dere trykker på "Heroku Git" - men end til slutt opp på GitHub-alternativet. Her kan dere søke etter et repository å koble til \(man må koble seg til GitHub først hvis det ikke allerede er på plass\). Når riktig repository dukker opp, er det bare å trykke "connect". Videre anbefaler vi å enable Automatic Deploys - slik at siden din alltid vil bli oppdatert på Heroku når ny kode finner veien inn i `master`-branchen.

Og stort mer er det ikke som skal til for å få opp sin første nettside på web. Gratulerer, du har produksjonsatt ditt første prosjekt! 🎉

### Bonus: Sett opp custom domene

Hvis du eier et domene, kan du gå på Settings-fanen inne på Heroku-appen din og legge det inn som custom domain. Du må også sette opp en peker tilbake til heroku-appen hos DNS-leverandøren din, dvs. de du kjøpte domenet fra. Typisk setter man \`CNAME\` eller \`ALIAS\`, og Heroku har en ganske [grundig guide](https://devcenter.heroku.com/articles/custom-domains) som dekker stegene man må ta for å få appen opp på eget domene.

