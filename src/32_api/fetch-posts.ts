// * Wir wollen uns alle Posts von https://jsonplaceholder.typicode.com/posts abholen

type Post = { userId: number; id: number; title: string; body: string };

// ? bei fetch gebe ich als Parameter die URL der Schnittstelle an
// ? ich bekomme ein Promise vom Typ Response => Promise<Response>
// ? fetch macht das Gleiche wie ich in Postman beim "Send" auslöse
fetch('https://jsonplaceholder.typicode.com/posts')
  // ? 1. Schritt - Response prüfen und in Objekt umwandeln
  .then((response: Response) => {
    // ? wenn die Antwort von der Schnittstelle nicht ok war
    // ? das sollten wir immer prüfen
    if (!response.ok) {
      console.log('Response was not ok');
    }

    // ? Nächster Schritt ist immer: die Response in ein echtes JavaScript-Objekt umwandeln
    // ? damit ich in den nächsten Schritten normal mit JavaScript zugreifen kann
    return response.json();
  })
  // ? Nächste Schritte - Daten von der Schnittstelle tatsächlich verwenden
  .then((posts: Post[]) => {
    // ? ich schaue selbst nochmal ob wirklich posts in der Antwort sind und werfe dann einen eigenen Fehler
    // ? zusätzliche Fehlerprüfung
    if (!posts || !posts.length) {
      throw new Error('No posts available');
    }
    posts.forEach((post: Post) => {
      console.log(post.id);
      console.log(post.title);
    });
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Done with fetching the posts');
  });
