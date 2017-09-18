var rank = "Scout";
var points = 0;
var troop = prompt("Hello! Welcome to Scouting Adventures! This is a game where you can virtually expeirience the thrills of scouting! First of all, what troop are you going to join?","Type in your troop number here!");
var fishing = false;
var camping = false;
var first_aid = false;
var swimming = false;
var music = false;
var hiking = false;
var merits = [fishing, camping, first_aid, swimming, music, hiking]; //Add new merit awards at the front
var grandCanyon = false;
var d_Valley = false;
var mountain = false;
var forest = false;
var hikeExp = [grandCanyon, d_Valley, mountain, forest];
var campTimes = 0;
var evrythngElseCamp = false;
function notify() {
  window.alert("Congratulations! You are now " + rank + " rank!");
};
function rankAdvan(){
  var oldRank = rank
  function rankUp() {
    if (oldRank != rank) {
      notify()
    }
  }
  if (points > 399) {
    rank = "Eagle";
  } else if (points > 299) {
      rank = "Life";
  } else if (points > 199) {
      rank = "Star";
  } else if (points > 149) {
      rank = "First Class";
  } else if (points > 99) {
      rank = "Second Class";
  } else if (points > 24) {
      rank = "Tenderfoot";
  }
  rankUp();
};

for (var i = 0; i < 1;) {
do {
if (isNaN(troop) == true) {
    troop = prompt("Please use a number!")
  }
else {
    window.alert("Ok, you have joined troop " + troop + "! Click 'ok' to begin your scouting adventure!");
    i++
  }
}
while (isNaN(troop) == true)
};
function func2() {
  window.alert("You have " + points + " points!");
};
function func() {
  window.alert("Your rank is " + rank + "!");
};
function hike() {
  var lochike = prompt("Where do you want to hike? Your options are Grand Canyon, Forest, Mountain, or Death Valley?").toLowerCase()
  switch (lochike){
    case ("grand canyon"):
        points = points + 15;
        window.alert("What a view! You have earned 15 points for hiking here! You now have " + points + " points!");
        grandCanyon = true;
        hikeExp[0] = grandCanyon;
        break;
    case ("death valley"):
        points = points + 20;
        window.alert("Hot choice! You have earned 20 points for hiking here! You now have " + points + " points!");
        d_Valley = true;
        hikeExp[1] = d_Valley;
        break;
    case ("forest"):
        points = points + 5;
        window.alert("Oh look, a rabbit! For hiking here you have earned 5 points! You now have " + points + " points!");
        forest = true;
        hikeExp[3] = forest;
      break;
    case ("mountain"):
        points = points + 10;
        window.alert("You're on top of the world! You have earned 10 points for hiking here! You now have " + points + " points!");
        mountain = true;
        hikeExp[2] = mountain;
      break;
    default:
        window.alert("Sorry! Troop " + troop + " can't go there! Please try again and check your spelling!");
     }
     if (hiking = false) {
       if (hikeExp[0] && hikeExp[1] && hikeExp[2] && hikeExp[3] == true) {
       hiking = true;
       merits[5] = hiking;
       window.alert("Congrats! You have earned a secret merit award, Hiking!");
      }
    }
     rankAdvan();
  };
function classes(){
    var whichClass = prompt("Classes earn you points and merit awards! Which class do you want to take: Fishing, Camping, First Aid, Music, or Swimming").toLowerCase();
    switch (whichClass) {
      case ("swimming"):
          points = points + 15;
          swimming = true;
          merits[3] = swimming;
          window.alert("Just keep swimming, just keep swimming! For taking this class you have earned 15 points! You now have a total of " + points + " points!");
        break;
        case ("fishing"):
          points = points + 10;
          fishing = true;
          merits[0] = fishing;
          window.alert("Catch of the day! You have earned 10 points for taking this class! You now have a total of " + points + " points!");
        break;
        case ("camping"):
        if (campTimes > 2) {
          camping = true;
          merits[1] = camping;
          points =  points + 15;
          window.alert("Camping... It's in-tents! For taking this class you have earned 15 points! You now have a total of " + points + " points!");
        }
        else {
          var more = (3 - campTimes);
          window.alert("Sweet! You have everything you need for this merit, except " + more + " more camping nights!");
        }
          break;
        case ("first aid"):
          first_aid = true;
          merits[2] = first_aid;
          points = points + 15;
          window.alert("Wrap it up! You have earned 15 points! You now have a total of " + points + " points!");
          break;
        case ("music"):
            music = true;
            merits[4] = music;
            points = points + 10;
            window.alert("You have earned 10 points! You now have a total of " + points + " points!");
          break;
      default:
          window.alert("I don't think " + whichClass + "was one of the options, please check your spelling and try again!");
    };
    rankAdvan();
};
function meritDis() {
  if (merits[0] == true) {
    document.getElementById("fish").innerHTML = "Fishing";
  }
  if (merits[1] == true) {
    document.getElementById("camp").innerHTML = "Camping";
  }
  if (merits[2] == true) {
    document.getElementById("f_aid").innerHTML = "First Aid";
  }
  if (merits[3] == true) {
    document.getElementById("swim").innerHTML = "Swimming";
  }
  if (merits[4] == true) {
    document.getElementById("music").innerHTML = "Music";
  }
  if (merits[5] == true) {
    document.getElementById("hike").innerHTML = "Hiking"
  }
};
function camp() {
  var where = prompt("Where do you want to camp? Forest, mountains, beach, or field.").toLowerCase();
  switch (where) {
    case ("forest"):
    var what = prompt("Cool! Do you want to explore, or take a class?","Type 'Class' or 'Explore' here!").toLowerCase();
      if (what == "explore") {
        points = points + 15;
        window.alert("You explore the forest. All seems quiet until you hear a rustle close by. A deer bounds out of a bush   and runs off! You have earned 15 points for these activities. You now have a total of " + points + " points!");
      }
      else if (what == "class") {
        classes()
      }
      break;
    case ("mountains"):
    var what = prompt("Cool! Do you want to explore, or take a class?","Type 'Class' or 'Explore' here!").toLowerCase();
      if (what == "explore") {
        points = points + 15;
        window.alert("You explore the mountain. You come across a small cave that tunnles through the moutain. When you reach the end you find a chamber with a lake of lava in the middle! You have earned 15 points for your adventure. You now have a total of " + points + " points!");
      }
      else if (what == "class") {
        classes()
      }
      break;
    case ("field"):
      var what = prompt("Cool! Do you want to explore, or take a class?","Type 'Class' or 'Explore' here!").toLowerCase();
      if (what == "explore") {
        points = points + 15;
        window. alert("You explore the field. As you are walking, you step in a small hole in the ground and you fall. When you roll over, you see a bald eagle in the sky! You have earned 15 points for your adventure. You now have a total of " + points + " points!");
      }
      else if (what == "class") {
        classes();
      }
      break;
    case ("beach"):
    var what = prompt("Cool! Do you want to explore, or take a class?","Type 'Class' or 'Explore' here!").toLowerCase();
    if (what == "explore") {
        points += 15;
        window.alert("You explore the beach. You come across a tide pool with an abundance of sea creatures! You have earned 15 points for camping here! You now have a total of " + points + " points!");
    }
    else if (what == "class") {
      classes();
    }
      break;
  default:
    window.alert("I don't think that was one of the options!");
}
  rankAdvan();
  campTimes += 1;
  if (campTimes > 2) {
    if (evrythngElseCamp = true) {
      camping = true;
      merits[1] = camping;
      window.alert("Congratulations! You have earned the camping merit award!")
    }
  }
};
function notify() {
  window.alert("Congratulations! You are now " + rank + " rank!");
};
console.log("No fatal errors in JS!"); //This will not log if there is anything fataly wrong with the code. Make any additions above it.
