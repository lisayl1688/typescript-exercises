const oldies: string[] = ['The Beatles - Let it be', 'The Rolling Stones - Angie', 'Elvis Presley - Suspicious Minds'];

// * find method
const beatles2 = oldies.find((oldie: string) => oldie === 'The Beatles - Let it be');
console.log({ beatles2 });

const startsWithElvis = oldies.find((oldie: string) => oldie.startsWith('Elvis'));
console.log({ startsWithElvis });
if (startsWithElvis) {
  const artistAndTitle = startsWithElvis.split(' - ');
  console.log(artistAndTitle[0]);
  console.log(artistAndTitle[1]);
}