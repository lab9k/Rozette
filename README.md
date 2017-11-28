# Rozette : translate-to-speech


![Rosetta Stone](https://i.imgur.com/aF9fi1I.png)

Dit project voorziet een functionaliteit van translate to speech.  

## How it works

Hoe wordt mijn Nederlandse tekst vertaald?

### Stap 1: Maak een nieuwe Google spreadsheet aan

Om te beginnen vertrekken we vanuit een template.
Open de [Google Spreadsheet template](https://docs.google.com/spreadsheets/d/1gsdlh7rZmZeC2rYBS16b3g1Z5kJ1AkiZRT9_sTJgBz4/edit#gid=0)

Klik op "bestand", vervolgens op "kopie maken..."
Nu kan je de naam aanpassen. Klik daarna op "OK"
Vervolgens wordt de aangemaakt spreadsheet automatisch geopend.

### Stap 2: Link de Google spreadsheet aan Rozette

haal de sleutel van deze spreadsheet uit de url, bv. :
GOOGLESPREADSHEEDID = 1gsdlh7rZmZeC2rYBS16b3g1Z5kJ1AkiZRT9_sTJgBz4

### Stap 3: Vul je Google spreadsheet in

Als end-user vul je in de linker kolom de tekst in in het nederlands die vertaalt moet worden:
[Google spreadsheet](https://docs.google.com/spreadsheets/d/GOOGLESPREADSHEEDID/edit?ts=5a0975fd#gid=0)

| Translating status | en | fr | de | tr | pl |
|----------|:-------------:|:------:| :------:|:------:|:------:|
|UK English Female |	UK English Female |	French Female |	Deutsch Female | Turkish Female |	Polish Female |
|te vertalen vanuit Nederlands|vertaling in Engels|vertaling in Frans|vertaling in Duits|vertaling in Turks|vertaling in Pools| 

### Stap 4: Translate

Vervolgens zal het script de tekst in alle opgeven talen vertalen(en,fr,de,tr & pl).
Daarna wordt de google spreadsheet vertaald in JSON formaat en aangeboden op volgende [link](https://spreadsheets.google.com/feeds/list/GOOGLESPREADSHEEDID/od6/public/values?alt=json)

### Stap 5: Speech

de web applicatie https://lab9k.github.io/Rozette/ zal deze data ophalen en tonen op de website.
Als men nu klikt op een woord/tekst zal deze uitgesproken worden. 

# Demo

[Demo](https://lab9k.github.io/Rozette/)


## Built with

* Google spreadsheets
* JS
* Responsive voice JS
