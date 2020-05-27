# M151

- [Projektbeschrieb](#projektbeschrieb)
   - [Persona](#persona)
   - [User Stories](#user-stories)
   - [Technologien](#technologien)
 - [Installation](#installation)
- [Abfragen](#abfragen)

## Projektbeschrieb
Das Ziel dieses Projekts, ist das Erstellen eines Webshops für verschiedene Produkte. Die Produkte können dabei von unterschiedlichen Produktgruppen kommen.

### Persona
#### Besucher
Als Besucher möchte ich alle Produkte sehen, welche im Webshop verfügbar sind. Zudem kann sich ein Besucher als Kunde registrieren.
#### Kunde 
Als registrierter und eingeloggter Kunde möchte ich nicht nur die Produkte anschauen können, wie der Besucher, sondern ich möchte diese auch bestellen können.
#### Verkäufer
Als eingeloggter Verkäufer möchte ich die Produkte verwalten können. Das heisst neu Produkte erstellen oder Werte der bestehenden Produkte ändern.

### User Stories
#### Produkt anschauen
Als Besucher möchte ich mir die aktuellen Produkte des Webshops anschauen können.
#### Registrieren
Als Besucher möchte ich mich registrieren, um danach als Kunde Produkte zu kaufen.
#### Anmelden
Als Kunde möchte ich mich anmelden, um danach Produkte kaufen zu können.
#### Produkt bestellen
Als Kunde möchte ich die aktuellen Produkte bestellen können.
#### Produkt hinzufügen
Als Verkäufer möchte ich neue Produkte zum Webshop hinzufügen.
#### Produkt bearbeiten
Als Verkäufer möchte ich bestehende Produkte bearbeiten können, um die Werte zu aktualisieren.
#### Produkt löschen
Als Verkäufer möchte ich Produkte löschen, dass diese nicht mehr verfügbar sind und somit vom Kunden nicht mehr bestellt werden können.

### Technologien
- Spring Boot
- Postgresql
- Angular

## Installation
~ = repository root folder

### Datenbank
Ordner: ~/backend/docker
```
docker-compose up
```

### Backend
Ordner: ~/backend
```
./gradlew bootRun
```

### Frontend
Ordner: ~/frontend
```
npm install
npm run start
```

## Abfragen
Für beispiel Abfragen habe ich ein File zur Verfügung gestellt, welches in das Programm Postman importiert werden kann.
[File](M151_postman_collection.json)
[Anleitung für Import in Postman (Extern)](https://kb.datamotion.com/?ht_kb=postman-instructions-for-exporting-and-importing)