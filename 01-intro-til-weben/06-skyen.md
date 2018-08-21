# Gjør nettsiden din offentlig!

Hittil har vi jobbet på egen maskin og observert hvordan koden vår har endret seg når vi utvikler på den.
Men hadde det ikke vært gøy å legge den ut så du kan dele den med hvem som helst som har tilgang på internett!?
Ikke noe som å vise stolt frem ting man har laget til venner og familie 😌

## Sett opp versjonskontroll på koden

Når vi utvikler er det greit å ha versjonskontroll på koden vår, og [Git](https://git-scm.com/) er bransjestandarden alle bruker i dag. Versjonskontroll er ikke bare bra for å finne tilbake til fordums kodetider gjennom en super historikk, men brukes også aktivt når vi utvikler kode sammen i team, ved at vi oppretter pull requests og har [code review](/08-best-practices/code-review.md) før koden blir merget inn.

Hvilken plattform man ønsker å lagre det på kan man velge selv, men i Bekk bruker vi ofte [BitBucket](https://bitbucket.org/), [GitHub](https://github.com/) eller [VSTS](https://visualstudio.microsoft.com/team-services/). I denne oppgaven lenker vi til ressurser for å få det på GitHub, men du står fritt til å velge hvilken remote du ønsker.

#### 1. Opprett et nytt repository

Når du er innlogget og står på forsiden til [GitHub](https://github.com/), trykk på den grønne knappen det står "New repository" på. Pass på å gjøre det på din private bruker, og med mindre du betaler for den, kommer repoet til å være public og tilgjengelig for hvem som helst. Kall repositoryet det du vil. Siden vi tenker å legge deres første nettside der, trenger dere heller ikke å initialisere den med `README` eller `.gitignore`.

Vi har lyst til å dytte nettsiden du begynte på i [første kapittel](/01-intro-til-weben/01-hello.md) til git. Siden vi allerede har mappen, vil vi gjøre den om til et git-repository som beskrevet under overskriften _…or create a new repository on the command line_ på siden man kommer til etter at man har opprettet et repo:

#### 2. Først legger vi til en README med bare en header i repoet:

```sh
echo "# MIN TITTEL" >> README.md
```

#### 3. Også greit å ha med en `.gitignore`

```sh
echo ".DS_Store" >> .gitignore
```

I `.gitignore` legger vi filer vi ikke trenger å ta vare på, typisk midlertidige filer som `.DS_Store` som dukker opp på macer i hytt og pine, `node_modules` som genereres når man kjører kommandoer som `npm install` osv. Vær alltid obs på om det har dukket opp filer du ikke trenger å versjonere når du commiter til git! Følgende verdier kan du legge inn i `.gitignore` nå med en gang:

```
.DS_Store
.idea/
\_node_modules/
*.log
```

#### 4. Så initialiserer vi mappen med git og legger til alle filene:

```sh
git init
git add .
```

#### 5. Og til slutt lager vi en initiell commit og dytter til remote

```
git commit -m "first commit"
git remote add origin
git@github.com:[BRUKERNAVN]/[REPONAVN].git
git push -u origin master
```

Urlen til repositoryet ditt står på siden du er på allerede, mest sannsynlig. Når du har pushet koden opp, har du offisielt introdusert versjonering på prosjektet ditt!

## Publiser koden på Heroku

Lag deg en bruker på [Heroku](https://heroku.com). Heroku er en skyplattform som er ganske enkel å komme igang med, og som vi skal lansere applikasjonen vår på.

> Det finnes mange andre gode skyleverandører der ute, ikke minst de tre store: AWS, Google Cloud og Azure. Når det gjelder små hobbyprosjekter, er Heroku og [Firebase](https://firebase.google.com) to veldig enkle og gode alternativer.
>
>**Obs!** Noen av tjenestene til andre skyleverandører, inkludert Firebase, er betal-tjenester, noe som ikke er nødvendig i de fleste hobbyprosjekter.

#### 1. Lag en ny app

I høyre hjørne når du har logget deg inn på Heroku, er det en knapp med teksten "New". Trykk på denne og velg "Create new app". Velg et navn som ikke finnes allerede - det er ikke veldig farlig akkurat hva den heter. Du kan enkelt sette opp siden med et domene du har kjøpt senere. Det finnes mange tilbydere for domener og hosting, blant annet domeneshop.com, one.com og GoDaddy.

#### 2. Koble appen til GitHub.

Gå til fanen "Deploy" inne på Heroku-appen din, hvis du ikke er der allerede. Som du ser er det flere måter man kan sette opp deploy, men den aller mest sømløse er å koble til GitHub. Titt gjerne på hva som dukker opp av instruksjoner hvis dere trykker på "Heroku Git" - men end til slutt opp på GitHub-alternativet. Her kan dere søke etter et repository å koble til (man må koble seg til GitHub først hvis det ikke allerede er på plass). Når riktig repository dukker opp, er det bare å trykke `connect`. Videre anbefaler vi å enable Automatic Deploys - slik at siden din alltid vil bli oppdatert på Heroku når ny kode finner veien inn i `master`-branchen.

Og stort mer er det ikke som skal til for å få opp sin første nettside på web. Gratulerer, du har produksjonsatt ditt første prosjekt! 🎉

#### Bonus: Sett opp custom domene

Hvis du eier et domene, kan du gå på Settings-fanen inne på Heroku-appen din og legge det inn som custom domain. Du må også sette opp en peker tilbake til heroku-appen hos DNS-leverandøren din, dvs. de du kjøpte domenet fra. Typisk setter man CNAME eller ALIAS, og Heroku har en ganske [grundig guide](https://devcenter.heroku.com/articles/custom-domains) som dekker stegene man må ta for å få appen opp på eget domene.
