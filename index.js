var rank = "Scout"
var points = 0
var troop = prompt("Hello! Welcome to Scouting Adventures! This is a game where you can vurtually expeirience the thrills of scouting! First of all, what troop are you going to join?","Type in your troop number here!");
function rankAdvan(){
  switch (points) {
    case 100:
        rank = "Tenderfoot";
      break;
    case 250:
        rank = "Second Class";
      break;
    case 400:
        rank = "First Class";
      break;
    case 700:
        rank = "Star";
      break;
    case 1200:
        rank = "Life";
      break;
    case 1800:
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

