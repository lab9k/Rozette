# Rozette : translate-to-speech


![Rosetta Stone](https://i.imgur.com/aF9fi1I.png)

Dit project voorziet een functionaliteit van translate to speech.  

## How it works

Hoe wordt mijn Nederlandse tekst vertaald?

### Stap 1: Maak een nieuwe Google spreadsheet aan

Om te beginnen vertrekken we vanuit een template.
Open de [Google Spreadsheet template](https://docs.google.com/spreadsheets/d/1gsdlh7rZmZeC2rYBS16b3g1Z5kJ1AkiZRT9_sTJgBz4/edit#gid=0)

Klik op "bestand", vervolgens op "kopie maken..."
Nu kan je de naam aanpassen. Klik daarna op "OK".
Vervolgens wordt de spreadsheet aangemaakt en geopend.

### Stap 2: Vul je Google spreadsheet in

* Vul in de linkerkolom de te vertalen tekst in het nederlands op.
* Voeg de [2-letterige landcodes](https://nl.wikipedia.org/wiki/ISO_3166-1) van de talen* naar waar u wenst te vertalen toe als kolomtitels. 

| Translating status | en | fr | de | tr | pl |
|----------|:-------------:|:------:| :------:|:------:|:------:|
|UK English Female |	UK English Female |	French Female |	Deutsch Female | Turkish Female |	Polish Female |
|te vertalen vanuit Nederlands|vertaling in Engels|vertaling in Frans|vertaling in Duits|vertaling in Turks|vertaling in Pools|

*: niet alle talen worden ondersteund. Klik [hier](https://responsivevoice.org/text-to-speech-languages/) voor een overzicht.

### Stap 3: Link de Google spreadsheet aan Rozette

Open volgende [link](https://lab9k.github.io/Rozette/help.html).
Scroll naar beneden tot je "stap 5" ziet staan, plak de url van je google spreadsheet 
in het text field en klik op "Maak rozette pagina". 

### Stap 4: Translate

Vervolgens zal het script de tekst in alle opgeven talen automatisch vertalen(bv. en,fr,de,tr & pl).

### Stap 5: Speech

de web applicatie https://lab9k.github.io/Rozette/ zal deze data ophalen en tonen op de website.
Als men nu klikt op een woord/tekst zal deze uitgesproken worden. 

# Demo

[Demo](https://lab9k.github.io/Rozette/)


## Built with

* Google spreadsheets
* JS
* Responsive voice JS
