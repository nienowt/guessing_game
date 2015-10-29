var name = prompt("What's your name?");
console.log("User identified as: " + name);
alert("Hello " + name + "! " + "It's nice to meet you.");
var from = prompt("Where are you from " + name + "?");
console.log("User is from: " + from);
alert("Oh! My best friend grew up in " + from + ", " +  "I wonder if you've ever met them.");
var answers = 0;


var game = prompt("Alright, " + name + " wanna play a game? 'Yes' or 'No'").toUpperCase();

  if ((game === "YES") || (game === "YEA") || (game === "Y")) {
    alert("Good! Let's begin.");
  } else if ((game === "NO") || (game === "N")) {
    alert("Too bad, let's begin.");
  } else {
    alert("I'll take that as a yes!");
  }

function home () {
  var home = prompt("Did I grow up in the northwest? 'Yes' or 'No'").toUpperCase();
  console.log("User answered Q1 with:" + home);

  if ((home === "YES") || (home === "YEA") || (home === "Y")) {
    alert("Correct!");
    answers++;
  } else if ((home === "NO") || (home === "N")) {
    alert("Oh, that is incorrect.");
  } else {
    alert("Invalid answer");
  }
}

function color () {
  var color = prompt("Alright, " + name + " what is my favorite primary color?").toUpperCase();
  console.log("User answered Q2 with:" + color);

  if (color === "RED") {
    alert("Wrong, terrible.");
  } else if (color === "YELLOW") {
    alert("Oh, no...it is not yellow");
  } else  if (color === "BLUE") {
    alert("Yep, I guess it's blue.")
    answers++;
  } else {
    alert("I'm not sure that's a primary color, " + name + ".");
  }
}

function food () {
  var food = prompt("Alright, " + name + ", do I like ethopian food? 'Yes' or 'No'").toUpperCase();
  console.log("User answered Q3 with: " + food);

  if ((food === "YES") || (food === "YEA") || (food === "Y")) {
    alert("Correct.");
    answers++;
  } else if ((food === "No") || (food === "N")) {
    alert("Incorrect!");
  } else {
    alert("Invlaid answer, " + name + ", no points.");
  }
}

function favNumber () {
  var favNumber = parseInt(prompt("What is my favorite number between 1 and 30?"));
  console.log("User answered Q3 with: " + favNumber);

  if (favNumber === 15) {
    alert("Correct!");
    answers++;
  } else if ((favNumber > 15) && (favNumber < 30)) {
    alert("Ah, no you're a little high.");
  } else if (favNumber < 15) {
    alert("Sorry, that's a little low.");
  } else {
    alert("I'm not sure that's a number between 1 and 30...");
  }
}

function fear () {
  var fear = prompt("Am I terrified of birds? 'Yes' or 'No'").toUpperCase();
  console.log("User answered Q4 with: " + fear);

  if ((fear === "YES") || (fear === "Y") || (fear === "YEA")) {
    alert("Incorrect! Birds fear me, generally.");
  } else if ((fear === "NO") || (fear === "N")) {
    alert("Correct! Despite their improbable legs, birds inspire no fear in me.");
    answers++;
  } else {
    alert("Invalid answer, " + name + ", no points.");
  }
}

function toeNumber () {
  var toeNumber = parseInt(prompt("How many toes do I have?"));
  console.log("User answered Q6 with: " + toeNumber);

  if (toeNumber === 10) {
    alert("Correct! At this point in life I have 10 toes.");
    answers++;
  } else if (toeNumber >= 10) {
    alert("Nope, just 10.");
  } else if (toeNumber <= 10) {
    alert("Maybe someday, but so far I still have 10.");
  } else {
    alert("I'm not sure that's a number, " + name + ", no points.");
  }
}

home();
color();
food();
favNumber();
fear();
toeNumber();

  if (answers === 1) {
    alert("You only got one right!");
  } else if (answers === 2) {
    alert("You got two right!");
  } else if (answers === 3) {
    alert("You got three right!");
  } else if (answers === 4) {
    alert("You got four right!");
  } else if (answers === 5) {
    alert("You got five right!");
  } else if (answers === 6) {
    alert("You got them all right!");
  } else {
    alert("Terrible job " + name + ", you got them all wrong.");
    var feel = prompt("How do you feel about your loss today?");
    console.log("User feels: " + feel);
  }
