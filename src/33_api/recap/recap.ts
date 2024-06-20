import IPost from './IPost';

console.log('recap.ts');
// ? - Hole in einem neuen fetch alle Posts ab https://jsonplaceholder.typicode.com/posts
// ?    und verarbeite sie weiter

// ?    - gib alle Posts auf der Konsole aus
// ?    - finde die höchste Post-Id und gib sie auf der Konsole aus
// ?    - finde den kürzesten Titel gib ihn auf der Konsole aus
// ?    - finde den längsten Body und gib ihn auf der Konsole aus

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
      console.error('Response was not ok');
    }
    return response.json();
  })
  .then((posts: IPost[]) => {
    //- gib alle Posts auf der Konsole aus
    //console.log(posts);
    return posts;
  })
  .then((posts: IPost[]) => {
    //- finde die höchste Post-Id und gib sie auf der Konsole aus
    // ? Variante 1
    let maxId = 0;
    posts.forEach((post) => {
      if (post.id > maxId) {
        maxId = post.id;
      }
    });
    console.log(maxId);

    // ? Variante 2
    const allPostIds = posts.map((post) => post.id);
    // ? Math.max ermittelt die höchste number aus einem number-Array
    // ? ich kann nicht das gesamte Array direkt reingeben, sondern muss den Spread-Operator verwenden, der die einzelnen
    // ? numbers "ausstreicht"
    const highestPostId = Math.max(...allPostIds);
    console.log(highestPostId);
    return posts;
  })
  .then((posts: IPost[]) => {
    // ? finde den kürzesten Titel gib ihn auf der Konsole aus
    const sortedTitlesByLengthAsc = posts.sort((postA: IPost, postB: IPost) => postA.title.length - postB.title.length);
    const shortestTitle = sortedTitlesByLengthAsc[0].title;
    console.log(shortestTitle);

    // ? wir fangen mit dem ersten Titel zum Vergleich
    let minTitle = posts[0].title;
    posts.forEach((post: IPost) => {
      if (post.title.length <= minTitle.length) {
        minTitle = post.title;
      }
    });
    console.log(minTitle);
    return posts;
  })
  .then((posts: IPost[]) => {
    //- finde den längsten Body und gib ihn auf der Konsole aus
    const sortedBodiesByLengthDesc = posts.sort((postA: IPost, postB: IPost) => postB.body.length - postA.body.length);
    const longestBody = sortedBodiesByLengthDesc[0].body;
    console.log(longestBody);

    let maxBody = '';
    posts.forEach((post: IPost) => {
      if (post.body.length >= maxBody.length) {
        maxBody = post.body;
      }
    });
    console.log(maxBody);
  });
