interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 46,
    song: "Mess",
    details: {
        author: "Mario",
        year: 2015,
    }
}

// const song = "New Song";

// Importante con details por la destructuracion de objetos

const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

 console.log("Song.:", anotherSong);
 console.log("Duration: ", duration);
console.log("Author.:", author);


// Destructuracion de arreglos, las comas es ignorar al resto de cosas
// const dbz: string [] = ["Goku","Vegeta","Trunk"];
// console.log("Personaje 3:" , dbz[2]);

//const trunk = dbz[3] || "No hay personaje";
// console.log("Personaje 3:" , trunk);

const [, ,trunks = "Not Found"]:  string[] = ["Goku","Vegeta"];
console.log("Personaje 3:" , trunks);







export { };