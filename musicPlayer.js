var music = [{
    "|Swordland|": '|playlist/Swordland.mp3|playlist/SL.jpg|',
  },
  {
    "|The Way I am|": '|playlist/TheWayIAm.mp3|playlist/MMLP.png|',
  },
  {
    "|Soldier|": '|playlist/Soldier.mp3|playlist/TES.png|',
  },
  {
    "|Lose Yourself|": '|playlist/LoseYourself.mp3|playlist/8M.jpg|',
  },
  {
    "|Criminal|": '|playlist/Criminal.mp3|playlist/TMMLP.png|',
  },
  {
    "|Fly Me to the Moon|": '|songs/GuraSong.mp3|playlist/FlyMe.png|',
  },
]
//Template: "|Song Name|": '|Song File Location|Song Cover Image Location|' Note: the information is divided by |.

var songaudio = new Audio("playlist/Swordland.mp3");//When page is loaded this is the first song to show. Note: This is hardcoded.

var play = 0;//Tells if there is anything to play
var i;

for (i = 0; i < music.length; i++){}

var playlist = i;//Number of songs
var track = 0;// Current Track
var shuffle = 0;//If shuffle is on
var randNum = Math.floor(Math.random() * playlist);//Random nunber for shuffle

//console.log(playlist);

function startmusic() {
  if (play == 0)
  {
    document.querySelector("#playbutton").value = "Pause";
    songaudio.play();
    play = 1;
  }
  else 
  {
    document.querySelector("#playbutton").value = "Play";
    songaudio.pause();
    play = 0;
  }
}

function next(){
  if (shuffle == 1) {
    startmusic()
    randNum = Math.floor(Math.random() * playlist);
    track = randNum;
    nextTrack();
    return;
  }
  if (track < playlist)
  {
    startmusic()
    track = track + 1;
    nextTrack();
    return;
  }
  else
  {
    startmusic()
    track = 0;
    nextTrack();
    return;
  }
}

function prev(){
  if (shuffle == 1) {
    startmusic();
    randNum = Math.floor(Math.random() * playlist);
    track = randNum;
    nextTrack();
    return;
  }
  if (0 < track)
  {
    startmusic();
    track = track - 1;
    nextTrack();
    return;
  }
  else 
  {
    startmusic()
    track = playlist;
    nextTrack();
    return;
  }
}

function shuff() {
  if (shuffle == 0)
  {
    document.querySelector("#shufflebutton").style.color = "red";
    shuffle = 1;
  }
  else
  {
    document.querySelector("#shufflebutton").style.color = "black";
    shuffle = 0;
  }
}

function nextTrack() {
  songaudio.pause()
  var jason = music[track];

  var input = JSON.stringify(jason);

  const [a, songName, b, location, img, c] = input.split("|");
  songaudio  = new Audio(location);
  console.log(songName);
  document.getElementById("songName").innerHTML = songName;
  document.querySelector("#musicIMG").src = img;

  document.querySelector("#playbutton").value = "Play";
  
  songaudio.pause();
  play = 0;
}