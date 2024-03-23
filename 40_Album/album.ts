

function make_album (artist:string, title:string, tracks?: number){

    const album: {artist:string, title:string, tracks?:number} = {

        artist: artist,
        title: title
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album
}

console.log(make_album('Artist 1','Album title 1'));

console.log(make_album('Artist 2','Album title 2'));

console.log(make_album('Artist 3','Album title 3',12));

