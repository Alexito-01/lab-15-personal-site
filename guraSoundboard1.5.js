var noise = [{
    a: '|soundboard/a.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    cydthl: '|soundboard/canyoudothehololivehum.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    catlaugh: '|soundboard/canyoudothehololivehum.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    giggle1: '|soundboard/giggle1.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    giggle2: '|soundboard/giggle2.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    giggle3: '|soundboard/giggle3.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    guradesu: '|soundboard/guradesu.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    huh: '|soundboard/kiaracallsgura.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    nya: '|soundboard/nya.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    nya_laugh: '|soundboard/nya_laugh.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    Peek_a_boo: '|soundboard/Peek_a_boo.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    pekoralaugh: '|soundboard/pekoralaugh.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    samedesu: '|soundboard/samedesu.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    Shaaarrrkk: '|soundboard/Shaaarrrkk.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    Shaaarrrkk_SHAAARRRKK: '|soundboard/Shaaarrrkk_SHAAARRRKK.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    SharkLaugh1: '|soundboard/SharkLaugh1.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
  },
  {
    SharkLaugh2: '|soundboard/SharkLaugh2.mp3|',//Credit: https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g
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
    setTimeout(guraimg2, 3500);

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
