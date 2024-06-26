// Lernziel: Interface Segregation Principle anwenden

// - Erstelle ein Interface IMediaPlayer
//     - fileName: string
//     - length: number
//     - playAudio(): void
//     - recordAudio(): void
//     - playVideo(): void
//     - recordVideo(): void
// - Analysiere das gegebene Interface MediaPlayer, das verschiedene Methoden für die Wiedergabe und Aufzeichnung von Audio- und Videodateien definiert.
// - Überlege, ob das Interface-Segregation-Prinzip in dieser Situation angewendet werden kann, um die Struktur des Interfaces zu verbessern.
// - Entwirf neue abgeleitete Interfaces, die spezifische Verantwortlichkeiten für die Audiowiedergabe, die Audioaufzeichnung, die Videowiedergabe und die Videoaufzeichnung definieren.
// - Implementiere neue Klassen, die von den abgeleiteten Interfaces erben und nur die entsprechenden Methoden implementieren.
// - Teste den überarbeiteten Code, um sicherzustellen, dass er ordnungsgemäß funktioniert und die Trennung der Interfaces verbessert wurde.