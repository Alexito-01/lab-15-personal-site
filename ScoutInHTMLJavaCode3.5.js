//Note: Originally img was going to be the img src but when coding, started to use id instead and just renamed imgs to id numbers.
var characters = [{
    id: 0,
    name: 'Kirito',
    subname: 'Black Swordsman',
    star: 4,
    owned: ''
  },
  {
    id: 1,
    name: 'Asuna',
    subname: 'Lighting Flash',
    star: 4,
    owned: '',
  },
  {
    id: 2,
    name: 'Leafa',
    subname: 'Storm Mage',
    star: 4,
    owned: '',
  },
  {
    id: 3,
    name: 'Yuuki',
    subname: 'Zekken',
    star: 4,
    owned: '',
  },

  {
    id: 4,
    name: 'Silica',
    subname: 'Dragon Tamer',
    star: 4,
    owned: '',
  },

  {
    id: 5,
    name: 'Lisbeth',
    subname: 'Master Mace',
    star: 4,
    owned: '',
  },

  {
    id: 6,
    name: 'Sinon',
    subname: 'Goddess of Death',
    star: 4,
    owned: '',
  },

  {
    id: 7,
    name: 'Klein',
    subname: 'Furinkazan',
    star: 4,
    owned: '',
  },

  {
    id: 8,
    name: 'Strea',
    subname: 'MHCP-02',
    star: 4,
    owned: '',
  },

  {
    id: 9,
    name: 'Rain',
    subname: 'Multi-Wielder',
    star: 4,
    owned: '',
  },

  {
    id: 10,
    name: 'Philia',
    subname: 'Treasure Hunter',
    star: 4,
    owned: '',
  },

  {
    id: 11,
    name: 'Agil',
    subname: 'Brawney Axeman',
    star: 4,
    owned: '',
  },

  {
    id: 12,
    name: 'Seven',
    subname: 'Star Scientist',
    star: 4,
    owned: '',
  },

  {
    id: 13,
    name: 'Asuna',
    subname: 'Undine Healer',
    star: 4,
    owned: '',
  },

  {
    id: 14,
    name: 'Kirito',
    subname: 'Skill Connect',
    star: 4,
    owned: '',
  },

  {
    id: 15,
    name: 'Silica',
    subname: 'Fairy Dragon Tamer',
    star: 4,
    owned: '',
  },

  {
    id: 16,
    name: 'Sinon',
    subname: 'Cool-Headed Sniper',
    star: 4,
    owned: '',
  },

  {
    id: 17,
    name: 'Lisbeth',
    subname: 'Fairy Blacksmith',
    star: 4,
    owned: '',
  },

  {
    id: 18,
    name: 'Kirito',
    subname: 'Hero&#8217s Return',
    star: 4,
    owned: '',
  },

  {
    id: 19,
    name: 'Asuna',
    subname: 'Heart of Confront',
    star: 4,
    owned: '',
  },

  {
    id: 20,
    name: 'Silica',
    subname: 'Augmented Tamer',
    star: 4,
    owned: '',
  },

  {
    id: 21,
    name: 'Lisbeth',
    subname: 'Effcient Smith',
    star: 4,
    owned: '',
  },
]

var DebugMode = 1;//To enter Debug Mode: 0 || To leave Debug Mode: 1

function scout(){

  function RandomNum(max) {
    return Math.floor(Math.random() * max);
    //Replace the max as the number that will be the maximum in the randomize sequence. 
  }

  //total number of Characters: The chance of you getting a character is 1 out of how ever many characters there are
  var numOfChars = 21;

  //Roll the "dice"
  var characteroutcome = RandomNum(numOfChars);

  if (DebugMode == 0)
  {
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
  //Note: a-d,e-g,h-i,j-k and l are are garbage that was split off and is not useful nor relevent.
  const [a, b, id, c, d, name, e, f, g, subname, h, i, star, j, k, owned, l] = output.split('"');

  if (DebugMode == 0)
  {
    //Debug Tests
    //console.log(id);//id to be used only for console purposes
    console.log(name);
    console.log(subname);
  }
  if (owned == 'yes') {
    console.log(owned); //WIP //Idea: Use yes or no and show the owned ones in the bottom of the page.
  }

  //To seperate the star number from th : and ,
  const [m, n] = star.split(':');
  const [starnum, o] = n.split(',');

  if (DebugMode == 0)
  {
    //Debug Test
    console.log("Number of Stars: " + starnum);
  }

  //To seperate the id number from th : and ,
  const [p, q] = id.split(':');
  const [idnum, r] = q.split(',');

  if (DebugMode == 0)
  {
    //Debug Test
    console.log("Id Number: " + idnum);
  }

  //★s

  if (starnum == '6') {
    stars = "&#9733; &#9733; &#9733; &#9733; &#9733; &#9733;";
  } else if (starnum == '5') {
    stars = "&#9733; &#9733; &#9733; &#9733; &#9733;";
    emptystars = "&#9734;";
  } else if (starnum == '4') {
    stars = "&#9733; &#9733; &#9733; &#9733;";
    emptystars = "&#9734; &#9734;";
  } else if (starnum == '3') {
    stars = "&#9733; &#9733; &#9733;";
    emptystars = "&#9734; &#9734; &#9734;";
  } else if (starnum == '2') {
    stars = "&#9733; &#9733;";
    emptystars = "&#9734; &#9734; &#9734; &#9734;";
  } else if (starnum == '1') {
    stars = "&#9733;";
    emptystars = "&#9734; &#9734; &#9734; &#9734; &#9734;";
  } else {
    console.log("Error in counting stars");
    stars = "Error &#9733;";
  }

  var imgurl = "imgs/" + idnum + ".png";

  var imgtest = "https://th.bing.com/th/id/OIP.ID5QhKHcot4RGw-DwWt7ZgHaJ9?pid=ImgDet&rs=1";

  if (DebugMode == 0)
  {
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
  if (DebugMode == 0)
  {
    console.log("Button Name changed to Scouting...");
  }
}

function buttonTextre() {
  //document.querySelector("#demo").innerHTML = "Hello World!";
  document.querySelector("#scoutbutton").style.fontSize = '25px';
  document.querySelector("#scoutbutton").value = ("Click to Scout for another Character");
  if (DebugMode == 0)
  {
    console.log("Button Name changed.");
  }
}

function check() {
    buttonText();
    setTimeout(scout, 500);//500 is how long it takes to "scout"
    setTimeout(buttonTextre, 500);
}
//For Testing Purposes
var starse = "&#9733; &#9733; &#9733; &#9733; &#9733; &#9733;";

//To push button
$('#scoutbutton').click(check);
