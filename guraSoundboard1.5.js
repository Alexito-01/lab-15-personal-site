var noise = [{
    a: '|soundboard/a.mp3|',
  },
  {
    cydthl: '|soundboard/canyoudothehololivehum.mp3|',
  },
  {
    catlaugh: '|soundboard/canyoudothehololivehum.mp3|',
  },
  {
    giggle1: '|soundboard/giggle1.mp3|',
  },
  {
    giggle2: '|soundboard/giggle2.mp3|',
  },
  {
    giggle3: '|soundboard/giggle3.mp3|',
  },
  {
    guradesu: '|soundboard/guradesu.mp3|',
  },
  {
    huh: '|soundboard/kiaracallsgura.mp3|',
  },
  {
    nya: '|soundboard/nya.mp3|',
  },
  {
    nya_laugh: '|soundboard/nya_laugh.mp3|',
  },
  {
    Peek_a_boo: '|soundboard/Peek_a_boo.mp3|',
  },
  {
    pekoralaugh: '|soundboard/pekoralaugh.mp3|',
  },
  {
    samedesu: '|soundboard/samedesu.mp3|',
  },
  {
    Shaaarrrkk: '|soundboard/Shaaarrrkk.mp3|',
  },
  {
    Shaaarrrkk_SHAAARRRKK: '|soundboard/Shaaarrrkk_SHAAARRRKK.mp3|',
  },
  {
    SharkLaugh1: '|soundboard/SharkLaugh1.mp3|',
  },
  {
    SharkLaugh2: '|soundboard/SharkLaugh2.mp3|',
  },
]

function guranoise() {

  var total = 17;

  var randNum = Math.floor(Math.random() * total);

  //For Testing Purposes
  //var randNum = 11;

  //console.log("guranoise(): " + randNum);

  if (randNum == 11) {
    document.getElementById("gurabutton").src = "peko.gif";
    setTimeout(guraimg, 3500);

  }

  var jason = noise[randNum];

  var input = JSON.stringify(jason);

  const [a, output, b] = input.split("|");

  //document.getElementById("soundboard").src = "soundboard/" + output;

  var audio = new Audio(output);

  //console.log("guranoise(): " + audio);

  audio.play();
}

function guranoise2() {

  var total = 17;

  var randNum = Math.floor(Math.random() * total);

  //For Testing Purposes
  //var randNum = 11;

  //console.log("guranoise2(): " + randNum);

  if (randNum == 11) {
    document.getElementById("gurabutton2").src = "peko.gif";
    setTimeout(guraimg, 3500);

  }

  var jason = noise[randNum];

  var input = JSON.stringify(jason);

  const [a, output, b] = input.split("|");

  //document.getElementById("soundboard").src = "soundboard/" + output;

  var audio = new Audio(output);

  //console.log("guranoise2(): " + audio);

  audio.play();
}

function guraimg() {
  document.getElementById("gurabutton").src = "guraDance.gif";

}

function guraimg2() {
  document.getElementById("gurabutton2").src = "guraDance.gif";

}
