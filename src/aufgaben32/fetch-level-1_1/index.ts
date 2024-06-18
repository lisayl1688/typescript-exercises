// - Nutze den Endpunkt /list der [Picsum API](https://picsum.photos/v2/list) und lass dir die Liste der Bilder in der Console ausgeben.
// - Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an
export{};
type Photos = {id:number,author:string,width: number,height: number,url:string,download_url:string};

fetch ('https://picsum.photos/v2/list')
.then ((response: Response) =>{
    if(!response.ok) {
        console.log('Response was not ok');
    }
    return response.json();
})
.then ((photo: Photos[]) =>{
    photo.forEach((photo: Photos) => {
        console.log(photo);
    })

})
.catch((error) => {
    console.error(error);
})
.finally(() => {
     console.log('Done with fetching the posts');
     });

