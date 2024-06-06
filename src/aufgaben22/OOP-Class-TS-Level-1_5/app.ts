import Song from "./Song";
import SongWithUnknownArtist from "./SongWithUnknownArtist";

const song1 = new Song ("Back to December", "Taylor Swift");
song1.durationInSeconds = "180";
const song2 = new Song ("testSong", "testArtist");
song2.durationInSeconds = "150";


const whoIsTheArtist = new SongWithUnknownArtist ("goodSong");
whoIsTheArtist.setArtist("newArtist")
console.log(whoIsTheArtist);