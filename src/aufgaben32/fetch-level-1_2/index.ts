// Lernziel: fetch zum Abrufen von Daten von einer API nutzen
export {};
// - Nutze die [JSON-Placeholder API](https://jsonplaceholder.typicode.com/posts/1/comments) und hole dort mit fetch die Kommentare zum post1 unter 
// https://jsonplaceholder.typicode.com/posts/1/comments ab
// - Die Antwort/Response sieht so aus

// ```tsx
// [
//   {
//     "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//   },
//   {
//     "postId": 1,
//     "id": 2,
//     "name": "quo vero reiciendis velit similique earum",
//     "email": "Jayne_Kuhic@sydney.com",
//     "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//   }, ...
// ]
// ```

type comments = {postId : number, id: number, name: string, email: string, body: string};

fetch ('https://jsonplaceholder.typicode.com/posts/1/comments')
.then((response : Response) => {
    if(!response.ok){
        console.log('Response was not ok');
    }
    return response.json();

})
.then ((comment: comments[]) =>{
    comment.forEach((comment: comments) => {
        console.log(comment.email);
    })

})
.catch((error) => {
    console.error(error);
})
.finally(() => {
     console.log('Done with fetching the posts');
     });


type posts = {userId : number, id: number, title: string, body: string};

fetch ('https://jsonplaceholder.typicode.com/posts')
.then((response : Response) => {
    if(!response.ok){
        console.log('Response was not ok');
    }
    return response.json();

})
.then((post: posts[]) =>{
    console.log(post);
    return post;
})
.then ((post: posts[]) =>{
    let biggestId :number = 0;
    post.forEach((post: posts) => {
        let currentPostId :number = post.id
        if(currentPostId>biggestId){
            biggestId = currentPostId;
        }
    })
    console.log(biggestId);
    return post;
})
.then((post: posts[]) =>{
    let shortestTextlength :string= post[0].title;
    post.forEach((post: posts) => {
        let currentTextLength :number = post.title.length
        if(currentTextLength<shortestTextlength.length){
            shortestTextlength = post.title;
        }
    })
    console.log('der kürzeste Titel ist :',shortestTextlength);
    return post;
})
.then((post: posts[]) =>{
    let longestBody :string= post[0].body;
    post.forEach((post: posts) => {
        let currentBodyLength :number = post.body.length
        if(currentBodyLength>longestBody.length){
            longestBody = post.body;
        }
    })
    console.log('der längste body ist :',longestBody);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
     console.log('Done with fetching the posts');
});

