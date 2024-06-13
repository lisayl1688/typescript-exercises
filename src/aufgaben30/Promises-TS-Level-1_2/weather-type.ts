// Wettervorhersage

// - Lege eine Datei weather-type.ts an
// - Erstelle dort ein Enum WeatherType mit den Werten none = 0, sunny = 1, cloudy = 2, rainy = 3, snowy = 4, stormy = 5, windy = 6
// - Lege eine forecast.ts an
// - Erstelle ein Promise vom Typ WeatherType
// - Lass dir mit Math.random einen zufälligen Wert zwischen 0 und 9 generieren
// - Ist der Wert zwischen 0 und 6, gib mit resolve den zugeordneten Enum-Wert zurück
// - Ist der Wert > 6, rejecte das Promise mit einem Fehlertext “Weather forecast could not be determined”
// - Hänge dich an das Promise
// - Gib im then-Block das Ergebnis auf der Konsole aus
// - Gib im catch-Block den Fehler auf der Konsole aus

enum WeatherType {
    none = 0, 
    sunny = 1, 
    cloudy = 2, 
    rainy = 3, 
    snowy = 4, 
    stormy = 5, 
    windy = 6
}

export default WeatherType;