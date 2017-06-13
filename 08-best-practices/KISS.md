# KISS: Keep it simple, stupid!

Noen ganger er vi fryktelig lure, og det er fort gjort å være _for_ lur når man er godt inne i et problem og forstår kontekst og domene. Men husk at andre (og deg selv om noen dager/uker/måneders tid) skal lese og forstå koden uten den konteksten du er inne i akkurat idet du skriver den.

## Kommentering av kode
Hvis du lager en superkompleks formel, eller bare har fått en dato du må filtrere på fra en eller annen, skriv en kommentar på hvorfor akkurat dette må være sånn. Og hvis det ikke må være sånn - kanskje det går an å skrives enklere? En kommentar som den under (tatt fra et reelt prosjekt), indikerer at variabelnavnet på modellen er feil. Da er det bedre å refaktorere koden, enn å introdusere masse kommentarer som mest sannsynlig vil brukes andre steder enn der kommentaren er synlig.

```
string Beskrivelse; // Sakskode
```

Som hovedregel, er det greit å ikke kommentere for mye. Koden skal være selvdokumenterende og semtanisk enkel å forstå med gode navn på variabler og funksjoner. Men ved unntak eller veldig kontekst-spesifikk kode, hjelper det lang på vei med en setning eller to som forklarer hvorfor det må være sånn.
