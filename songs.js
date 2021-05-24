var banneraudio = new Audio("songs/GuraSong.mp3");

var key = 0;

function clear() {

  banneraudio.pause();

}

function fubuki() {
  clear();
  if (key == 0) {
    banneraudio = new Audio("songs/FubukiSong.mp3");//Credit: https://www.youtube.com/watch?v=r5XtaHenL0I
    banneraudio.play();
    key = 1;
  } else {
    key = 0;
  }
}

function ina() {
  clear();
  if (key == 0) {
    banneraudio = new Audio("songs/InaSong.mp3");//Credit: https://www.youtube.com/watch?v=0b-2TNfx6og
    banneraudio.play();
    key = 1;
  } else {
    key = 0;
  }
}

function mori() {
  clear();
  if (key == 0) {
    banneraudio = new Audio("songs/MoriSong.mp3");//Credit: https://www.youtube.com/watch?v=b5GONDGSvX8
    banneraudio.play();
    key = 1;
  } else {
    key = 0;
  }
}

function gura() {
  clear();
  if (key == 0) {
    banneraudio = new Audio("songs/GuraSong.mp3");//Credit: https://www.youtube.com/watch?v=82T8yOG5MTk
    banneraudio.play();
    key = 1;
  } else {
    key = 0;
  }
}

function kiara() {
  clear();
  if (key == 0) {
    banneraudio = new Audio("songs/KiaraSong.mp3");//Credit: https://www.youtube.com/watch?v=eDfMDkgheQY
    banneraudio.play();
    key = 1;
  } else {
    key = 0;
  }
}

function ame() {
  clear();
  if (key == 0) {
    banneraudio = new Audio("songs/AmeliaSong.mp3");//Credit: https://www.youtube.com/watch?v=JJcki1XmNZo
    banneraudio.play();
    key = 1;
  } else {
    key = 0;
  }
}

function pekora() {
  clear();
  if (key == 0) {
    banneraudio = new Audio("songs/PekoraSong.mp3");//Credit: https://www.youtube.com/watch?v=YotDsLALvWU
    banneraudio.play();
    key = 1;
  } else {
    key = 0;
  }
}
