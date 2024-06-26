## API Aufruf mit fetch

1. API-Doku lesen
2. Mit Postman aufrufen
3. Interface erzeugen: entweder selbst oder mit [quicktype.io](https://app.quicktype.io/typescript)
4. contracts Ordner anlegen
5. Interface-Datei anlegen
6. Interface exportieren
7. HTML-Datei anlegen
8. ts-Datei anlegen
9. In HTML-Datei div für output anlegen
10. in ts-Datei: fetch-Aufruf
11. URL(s) oben definieren - am besten mit BASE-URL und weiteren URLs, die BASE-URL verwenden
12. im ersten then die Response prüfen und return response.json() aufrufen
13. im nächsten then ist der Parameter dann vom Typ des Interfaces, z. B. IPlanetsResponse
14. falls die echten Daten nochmal eine Ebene weiter untenstecken,
    z. B. in einem Array stecken: dann weiteres then zur Übersichtlichkeit einfügen, Parameter ist dann z. B. IPlanet[]
15. Funktion anlegen, um die Daten dazustellen
    - output-Element mit getElementById holen
    - am Anfang immer einmal den Output leeren
    - entweder mit forEach über die Daten loopen oder direkt auf das Objekt zugreifen
    - document.createElement() und document.appendChild() nutzen oder
    - langen HTML-String selbst zusammenbauen
16. im catch Fehler abfangen und entweder auf der Konsole oder im HTML anzeigen
17. im finally Loading-Indicator schließen, falls vorhanden

## Hilfe - ich sehe keine Daten/bekomme Fehler
