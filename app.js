const musicContainer = document.getElementById('musicContainer');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progressContainer');
const title = document.getElementById('title');
const cover = document.getElementById('coverImg');

const songList = [
    'dubstep',
    'energy',
    'epic'
]

let songIndex = 2;

loadSong(songList[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `Music/${song}.mp3`;
    cover.src = `img/${song}.jpg`;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i').classList.add('fa-play');
    playBtn.querySelector('i').classList.remove('fa-pause');

    audio.pause();
}

prevBtn.addEventListener('click', prevSong());
nextBtn.addEventListener('click', nextSong());

function prevSong() {
    songIndex--;

    if(songIndex < 0) {
       songIndex = songList.length - 1;
    }

    loadSong(songList[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if(songIndex > songList.length - 1) {
       songIndex = 0;
    }

    loadSong(songList[songIndex]);

    playSong();
}