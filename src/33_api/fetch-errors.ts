console.log('fetch-errors');
// * wir nutzen die httpstat.us API, um Fehler zu bekommen

const statusCodes = [200, 201, 400, 401, 403, 404, 405, 500, 502, 503];

statusCodes.forEach((statusCode: number) => {
  fetch(`https://httpstat.us/${statusCode}`)
    .then((response: Response) => {
      // ? http-status siehe https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
      // ? um den Status auszugeben kann ich status und statusText aus der Response nutzen
      // ? wenn ich einen Fehler bekomme, will ich an der Stelle abbrechen und einen Fehler werfen
      if (!response.ok) {
        // ? kein statuscode, der mit 200 beginnt
        // ! fetch landet nicht automatisch bei Status-Codes > 400 im catch, wir müssen selbst den Fehler werfen
        throw Error(`Error ${response.status} ${response.statusText}`);
      }
      // ? hier kein echtes JSON oder sinnvolle Daten in der Antwort
      // ? wir geben selbst den Status als number weiter
      return response.status;
    })
    .then((status: number) => {
      console.log('Successful: ', status);
    })
    .catch((error) => {
      console.error(`Could not get data: ${error}`);
    });
});
