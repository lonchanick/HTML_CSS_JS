 
const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

const cancion = document.getElementById('cancion');
const artista = document.getElementById('artista');
const album = document.getElementById('album').innerHTML = "<code>Album</code>"
const playListSection=document.getElementById('playListSection');
const puseButton = document.getElementById('pauseButton');

const audio = new Audio();
const userData ={
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
}

function renderAllSongs()
{
  const renderedSongs = userData.songs.map(song =>
  `<li>
  <button class="songItem">
    <span onclick="playSong2(${song.id})" id="songName">${song.title}</span>
    <span id="sontArtistName">${song.artist} </span>
    <span id="songDuration">${song.duration}</span>
  </button>
  <button id="deleteButton" onclick="deleteSong(${song.id})">X</button>
  </li>`).join('\n');

  playListSection.innerHTML = renderedSongs;
}

function playSong2(id)
{
  const song = userData.songs.find(song => song.id === id);
  audio.src = song.src;
  userData.currentSong = song;
  displayCurrentSong(song);

  if(userData.currentSong.currentTime !== null)
  {
    audio.currentTime = userData.songCurrentTime;
  }

  audio.play();
}

function displayCurrentSong(song)
{
  artista.innerHTML= song.artist;
  cancion.innerHTML= song.title;
}

function deleteSong(id)
{ 
  // userData.songs = userData?.songs.filter((song) => song.id !== id);

  userData.songs = userData.songs.filter((song)=> song.id !== id);
  renderAllSongs();

}

function pauseSong(id)
{
  userData.songCurrentTime = audio.currentTime;
  audio.pause();
}

function nextSong()
{
  const currentSongId = userData.currentSong.id;
  console.log(currentSongId);
  console.log( userData.songs.length);
  if(currentSongId > userData.songs.length)
  {
    playSong2(0);
    return;
  }

  playSong2(currentSongId+1);
}

function previousSong()
{

}


pauseButton.addEventListener('click', pauseSong);

playButton.addEventListener('click',()=>{
  if(userData.currentSong === null)
    playSong2(userData.songs[0].id)
  else
    playSong2(userData.currentSong.id);
});

nextButton.addEventListener('click',nextSong);

renderAllSongs();


