var rank = "Scout"
var points = 0
var troop = prompt("Hello! Welcome to Scouting Adventures! This is a game where you can virtually expeirience the thrills of scouting! First of all, what troop are you going to join?","Type in your troop number here!");
var fishing = false;
var camping = false;
var first_aid = false;
var swimming = false;
var music = false;
var merits = [fishing, camping, first_aid, swimming, music]; //Add new merit awards at the front
function rankAdvan(){
    if(points > 50){
        rank = "Tenderfoot";
        rankUp();
      }
    else if(points > 125){
        rank = "Second Class";
        rankUp();
      }
    else if(points > 200){
        rank = "First Class";
        rankUp();
      }
    else if(points > 350){
        rank = "Star";
        rankUp();
      }
    else if(points > 525){
        rank = "Life";
        rankUp();
      }
    else if(points > 700){
        rank = "Eagle";
        rankUp();
      }
  };

for (var i = 0; i < 1;) {
do {
if (isNaN(troop) == true) {
    troop = prompt("Please use a number!")
  }
else {
    window.alert("Ok, you have joined troop " + troop + "! Click 'ok' to begin your scouting adventure!");
    i++
;  }
}
while (isNaN(troop) == true)
}
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
        case ("music"):
            music = true;
            merits[4] = music;
            points = points + 10;
            window.alert("You have earned 10 points! You now have a total of " + points + " points!");
          break;
      default:
          window.alert("I don't think " + whichClass + "was one of the options, please check your spelling and try again!");
    }
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
};
function camp() {
    var where = prompt("Where do you want to camp? Forest, mountains, or field.").toLowerCase();
    var what = prompt("Cool! Do you want to explore, or take a class?","Type 'class' or 'explore' here!").toLowerCase();
    switch (what) {
      case ("class"):
        classes();
        break;
      case ("explore"):
        switch (where) {
          case ("forest"):
            points = points + 15;
            window.alert("You explore the forest. All seems quiet until you hear a rustle close by. A deer bounds out of a bush and runs off! You have earned 15 points for these activities. You now have a total of " + points + " points!");
            break;
          case ("mountains"):
            points = points + 15;
            window.alert("You explore the mountain. You come across a small cave that tunnles through the moutain. When you reach the end you find a chamber with a lake of lava in the middle! You have earned 15 points for your adventure. You now have a total of " + points + " points!");
            break;
          case ("field"):
            points = points + 15;
            window. alert("You explore the field. As you are walking, you step in a small hole in the ground and you fall. When you roll over, you see a bald eagle in the sky! You have earned 15 points for your adventure. You now have a total of " + points + " points!")
            break;
          default:

        }
        break;
      default:
        window.alert("I don't think that was one of the options!");
    }
    rankAdvan();
};
function rankUp() {window.alert("Congratulations! You are now " + rank + " rank!")}
