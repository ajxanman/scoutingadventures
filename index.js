var rank = "Scout"
var points = 0
var troop = prompt("Hello! Welcome to Scouting Adventures! This is a game where you can vurtually expeirience the thrills of scouting! First of all, what troop are you going to join?","Type in your troop number here!");
var fishing = false;
var camping = false;
var first_aid = false;
var swimming = false;
var merits = [fishing, camping, first_aid, swimming];
function rankAdvan(){
  switch (points) {
    case 50:
        rank = "Tenderfoot";
      break;
    case 125:
        rank = "Second Class";
      break;
    case 200:
        rank = "First Class";
      break;
    case 350:
        rank = "Star";
      break;
    case 525:
        rank = "Life";
      break;
    case 700:
        rank = "Eagle"
      break;
  };
};
for (var i = 0; i < 1;) {
do {
if (isNaN(troop) == true) {
    troop = prompt("Please use a number!")
  }
else {
    window.alert("Ok, so you have joined troop " + troop + "! Click 'ok' to begin your scouting adventure!");
    i++
  }
}
while (isNaN(troop) == true)
}
function func2() {
  document.getElementById("point").innerHTML = "You have " + points + " points!";
};
function func() {
  document.getElementById("rankdis").innerHTML = "Your rank is " + rank + "!";
};
function hike() {
  var lochike = prompt("Where do you want to hike? Your options are Grand Canyon, Forest, Mountain, or Death Valley? (Click 'cancel' to cancel!)").toLowerCase()
  switch (lochike){
    case ("grand canyon"):
        points = points + 15;
        window.alert("What a view! You have earned 15 points for hiking here! You now have " + points + " points!");
        break;
    case ("death valley"):
        points = points + 20;
        window.alert("Hot choice! You have earned 20 points for hiking here! You now have " + points + " points!");
        break;
    case ("forest"):
        points = points + 5;
        window.alert("Oh look, a rabbit! For hiking here you have earned 5 points! You now have " + points + " points!");
      break;
    case ("mountain"):
        points = points + 10;
        window.alert("You're on top of the world! You have earned 10 points for hiking here! You now have " + points + " points!");
      break;
    default:
        window.alert("Sorry! Troop " + troop + " can't go there! Please try again and check your spelling!");
     }
     rankAdvan()
  };
function classes(){
    var whichClass = prompt("Classes earn you points and merit awards! Which class do you want to take: Fishing, Camping, First Aid, or Swimming").toLowerCase();
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
          camping = true;
          merits[1] = camping;
          points =  points + 15;
          window.alert("Camping... It's in-tents! For taking this class you have earned 15 points! You now have a total of " + points + " points!");
          break;
        case ("first aid"):
          first_aid = true;
          merits[2] = first_aid;
          points = points + 15;
          window.alert("Wrap it up! You have earned 15 points! You now have a total of " + points + " points!");
          break;
      default:
          window.alert("I don't think " + whichClass + "was one of the options, please check your spelling and try again!");
    }
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
};

function func() {
  document.getElementById("rankdis").innerHTML = "Your rank is " + rank + "!";
};
function hike() {
  var lochike = prompt("Where do you want to hike? Your options are Grand Canyon, Forest, Mountain, or Death Valley? (Click 'cancel' to cancel!)").toLowerCase()
  switch (lochike){
    case ("grand canyon"):
        points = points + 15;
        window.alert("What a view! You have earned 15 points for hiking here! You now have " + points + " points!");
        break;
    case ("death valley"):
        points = points + 20;
        window.alert("Hot choice! You have earned 20 points for hiking here! You now have " + points + " points!");
        break;
    case ("forest"):
        points = points + 5;
        window.alert("Oh look, a rabbit! For hiking here you have earned 5 points! You now have " + points + " points!");
      break;
    case ("mountain"):
        points = points + 10;
        window.alert("You're on top of the world! You have earned 10 points for hiking here! You now have " + points + " points!");
      break;
    default:
        window.alert("Sorry! Troop " + troop + " can't go there! Please try again and check your spelling!");
     }
     rankAdvan()
  };
function classes(){
    var whichClass = prompt("Classes earn you points and merit badges! Which class do you want to take: Fishing, Camping, First Aid, or Swimming").toLowerCase();
    switch (whichClass) {
      case ("swimming"):
          points = points + 15;
          swimming = true;
          merits[3] = swimming;
          console.log(merits);
          window.alert("Just keep swimming, just keep swimming! For taking this class you have earned 15 points and the Swimming merit badge! You now have a total of " + points + " points!");
        break;
        case ("fishing"):
          points = points + 10;
          fishing = true;
          merits[0] = fishing;
          window.alert("Catch of the day! You have earned 10 points for taking this class! You now have a total of " + points + " points!");
        break;
        case ("camping"):
          camping = true;
          merits[1] = camping;
          points =  points + 15;
          window.alert("Camping... It's in-tents! For taking this class you have earned 15 points! You now have a total of " + points + " points!");
          break;
        case ("first aid"):
          first_aid = true;
          merits[2] = first_aid;
          points = points + 15;
          window.alert("Wrap it up! You have earned 15 points! You now have a total of " + points + " points!");
          break;
      default:
          window.alert("I don't think " + whichClass + "was one of the options, please check your spelling and try again!");
    }
};
van(){
  switch (points) {
    case 50:
        rank = "Tenderfoot";
      break;
    case 125:
        rank = "Second Class";
      break;
    case 200:
        rank = "First Class";
      break;
    case 350:
        rank = "Star";
      break;
    case 525:
        rank = "Life";
      break;
    case 700:
        rank = "Eagle"
      break;
  };
};
//These logs are for de-bugging
console.log(rank);
console.log(points);
console.log(troop);
for (var i = 0; i < 1;) {
do {
if (isNaN(troop) == true) {
    troop = prompt("Please use a number!")
  }
else {
    window.alert("Ok, so you have joined troop " + troop + "! Click 'ok' to begin your scouting adventure!");
    i++
  }
}
while (isNaN(troop) == true)
}
function func2() {
  document.getElementById("point").innerHTML = "You have " + points + " points!";
};
function func() {
  document.getElementById("rankdis").innerHTML = "Your rank is " + rank + "!";
};
function hike() {
  var lochike = prompt("Where do you want to hike? Your options are Grand Canyon, Forest, Mountain, or Death Valley? (Click 'cancel' to cancel!)").toLowerCase()
  switch (lochike){
    case ("grand canyon"):
        points = points + 15;
        window.alert("What a view! You have earned 15 points for hiking here! You now have " + points + " points!");
        break;
    case ("death valley"):
        points = points + 20;
        window.alert("Hot choice! You have earned 20 points for hiking here! You now have " + points + " points!");
        break;
    case ("forest"):
        points = points + 5;
        window.alert("Oh look, a rabbit! For hiking here you have earned 5 points! You now have " + points + " points!");
      break;
    case ("mountain"):
        points = points + 10;
        window.alert("You're on top of the world! You have earned 10 points for hiking here! You now have " + points + " points!");
      break;
    default:
        window.alert("Sorry! Troop " + troop + " can't go there! Please try again and check your spelling!");
     }
     rankAdvan()
  };
function classes(){
    var whichClass = prompt("Classes earn you points and merit badges! Which class do you want to take: Fishing, Camping, First Aid, or Swimming").toLowerCase();
    switch (whichClass) {
      case ("swimming"):
          points = points + 15;
          merits[0] = "Swimming";
          window.alert("Just keep swimming, just keep swimming! For taking this class you have earned 15 points and the Swimming merit badge! You now have a total of " + points + " points!");
        break;
        case ("fishing"):
          points = points + 10;
          merits[1] = "Fishing";
          window.alert("Catch of the day! You have earned 10 points for taking this class! You now have a total of " + points + " points!");
        break;
        case ("camping"):
          merits[2] = "Camping";
          points =  points + 15;
          window.alert("Camping... It's in-tents! For taking this class you have earned 15 points! You now have a total of " + points + " points!");
          break;
        case ("first aid"):
          merits[3] = "First Aid";
          points = points + 15;
          window.alert("Wrap it up! You have earned 15 points! You now have a total of " + points + " points!");
          break;
      default:
          window.alert("I don't think " + whichClass + "was one of the options, please check your spelling and try again!");
    }
};
