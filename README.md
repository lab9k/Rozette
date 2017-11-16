# Rozette : translate-to-speech

"Ode aan Rozette" 
Dit project voorziet een functionaliteit van translate to speech.  

## How it works

### Stap 1: Invullen Google spreadsheet

Als end-user vul je in de linker kolom de tekst in in het nederlands die vertaalt moet worden:
[Google spreadsheet](https://docs.google.com/spreadsheets/d/1gsdlh7rZmZeC2rYBS16b3g1Z5kJ1AkiZRT9_sTJgBz4/edit?ts=5a0975fd#gid=0)

| Translating status | en | fr | de | tr | pl |
|----------|:-------------:|:------:| :------:|:------:|:------:|
|UK English Female |	UK English Female |	French Female |	Deutsch Female | Turkish Female |	Polish Female |
|te vertalen vanuit Nederlands|vertaling in Engels|vertaling in Frans|vertaling in Duits|vertaling in Turks|vertaling in Pools| 

### Stap 2: Translate

Vervolgens zal het script de tekst in alle opgeven talen vertalen(en,fr,de,tr & pl).
Daarna wordt de google spreadsheet vertaald in JSON formaat en aangeboden op volgende [link](https://spreadsheets.google.com/feeds/list/1gsdlh7rZmZeC2rYBS16b3g1Z5kJ1AkiZRT9_sTJgBz4/od6/public/values?alt=json)

### Stap 3: Speech

de web applicatie https://lab9k.github.io/Rozette/ zal deze data ophalen en tonen op de website.
Als men nu klikt op een woord/tekst zal deze uitgesproken worden. 

# Demo

[Demo](https://lab9k.github.io/Rozette/)


## Built with

* Google spreadsheets
* JS
* Responsive voice JS
