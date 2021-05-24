//Template: "|id number|": "|name|subname|stars|owned Note: owned is either 0 or 1|", //Images datamined
var characters = [{
    "|0|": "|Kirito|Black Swordsman|4||",
  },
  {
    "|1|": "|Asuna|Lighting Flash|4|0|",
  },
  {
    "|2|": "|Leafa|Storm Mage|4|0|",
  },
  {
    "|3|": "|Yuuki|Zekken|4|0|",
  },

  {
    "|4|": "|Silica|Dragon Tamer|4|0|",
  },

  {
    "|5|": "|Lisbeth|Master Mace|4|0|",
  },

  {
    "|6|": "|Sinon|Goddess of Death|4|0|",
  },

  {
    "|7|": "|Klein|Furinkazan|4|0|",
  },

  {
    "|8|": "|Strea|MHCP-02|4|0|",
  },

  {
    "|9|": "|Rain|Multi-Wielder|4|0|",
  },

  {
    "|10|": "|Philia|Treasure Hunter|4|0|",
  },

  {
    "|11|": "|Agil|Brawney Axeman|4|0|",
  },

  {
    "|12|": "|Seven|Star Scientist|4|0|",
  },

  {
    "|13|": "|Asuna|Undine Healer|4|0|",
  },

  {
    "|14|": "|Kirito|Skill Connect|4|0|",
  },

  {
    "|15|": "|Silica|Fairy Dragon Tamer|4|0|",
  },

  {
    "|16|": "|Sinon|Cool-Headed Sniper|4|0|",
  },

  {
    "|17|": "|Lisbeth|Fairy Blacksmith|4|0|",
  },

  {
    "|18|": "|Kirito|Hero&#8217s Return|4|0|",
  },

  {
    "|19|": "|Asuna|Heart of Confront|4|0|",
  },

  {
    "|20|": "|Silica|Augmented Tamer|4|0|",
  },

  {
    "|21|": "|Lisbeth|Effcient Smith|4|0|",
  },
]

var DebugMode = 1; //To enter Debug Mode: 0 || To leave Debug Mode: 1

function scout() {

  function RandomNum(max) {
    return Math.floor(Math.random() * max);
    //Replace the max as the number that will be the maximum in the randomize sequence. 
  }

  //total number of Characters: The chance of you getting a character is 1 out of how ever many characters there are
  var numOfChars = 21;

  //Roll the "dice"
  var characteroutcome = RandomNum(numOfChars);

  if (DebugMode == 0) {
    //Debug Test
    console.log("Characted Id Scouted: " + characteroutcome);
  }

  //Turn outcome into a new array
  //Note: For debuging purpose change character outcome with id for specific character
  var selectedcharacter = characters[characteroutcome];

  //Debug Test
  //console.log(selectedcharacter);

  //Ref: https://www.w3schools.com/js/js_json_stringify.asp
  var output = JSON.stringify(selectedcharacter); //Originally a array used: [selectedcharacter]; instead, keeping just in case


  //Use code from yt downloader to split strings. Line refrenced: const [www, youtube, videoid] = splitstr.split('.');
  //Note: a and b are are garbage that was split off and is not useful nor relevent.
  const [a, id, b, name, subname, star, owned] = output.split('|');

  if (DebugMode == 0) {
    //Debug Tests
    //console.log(id);//id to be used only for console purposes
    console.log(name);
    console.log(subname);
  }
  if (owned == 1) {
    console.log(owned); //WIP //Idea: Use yes or no and show the owned ones in the bottom of the page.
  }

  //★s
  if (star == '6') {
    stars = "&#9733; &#9733; &#9733; &#9733; &#9733; &#9733;";
  } else if (star == '5') {
    stars = "&#9733; &#9733; &#9733; &#9733; &#9733;";
    emptystars = "&#9734;";
  } else if (star == '4') {
    stars = "&#9733; &#9733; &#9733; &#9733;";
    emptystars = "&#9734; &#9734;";
  } else if (star == '3') {
    stars = "&#9733; &#9733; &#9733;";
    emptystars = "&#9734; &#9734; &#9734;";
  } else if (star == '2') {
    stars = "&#9733; &#9733;";
    emptystars = "&#9734; &#9734; &#9734; &#9734;";
  } else if (star == '1') {
    stars = "&#9733;";
    emptystars = "&#9734; &#9734; &#9734; &#9734; &#9734;";
  } else {
    console.log("Error in counting stars");
    stars = "Error &#9733;";
  }

  var imgurl = "imgs/" + id + ".png";

  var imgtest = "https://th.bing.com/th/id/OIP.ID5QhKHcot4RGw-DwWt7ZgHaJ9?pid=ImgDet&rs=1";

  if (DebugMode == 0) {
    //For Debug
    console.log(imgurl);
  }

  //Note: This requires jQuery
  //Version used was: jQuery 3.4.1. https://jsfiddle.net/qvy69xfu/(1-5 versions are saved)/
  //To use jquery use: <script src="jquery-3.5.1.min.js">< /script>
  //#name, #stars and #image are id's that need to be put in a <div>. Example: <div id="name"></div>
  $('#name').html("[" + subname + "] " + name + "<br>");
  $('#startext').html("Star(s):" + "<br>");
  $('#stars').html(stars + "<br>");
  $('#starsblank').html(emptystars + "<br>");
  document.getElementById("image").src = imgurl;
}

function buttonText() {
  //document.querySelector("#demo").innerHTML = "Hello World!";
  document.querySelector("#scoutbutton").style.fontSize = '30px';
  document.querySelector("#scoutbutton").value = ("Scouting...");
  if (DebugMode == 0) {
    console.log("Button Name changed to Scouting...");
  }
}

function buttonTextre() {
  //document.querySelector("#demo").innerHTML = "Hello World!";
  document.querySelector("#scoutbutton").style.fontSize = '25px';
  document.querySelector("#scoutbutton").value = ("Click to Scout for another Character");
  if (DebugMode == 0) {
    console.log("Button Name changed.");
  }
}

function check() {
  buttonText();
  setTimeout(scout, 500); //500 is how long it takes to "scout"
  setTimeout(buttonTextre, 500);
}
//For Testing Purposes
var starse = "&#9733; &#9733; &#9733; &#9733; &#9733; &#9733;";
