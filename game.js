https://github.com/nienowt/guessing_game-2.gitvar name = prompt("What's your name?");
console.log("User identified as: " + name);
alert("Hello " + name + "! " + "It's nice to meet you.");
var from = prompt("Where are you from " + name + "?");
console.log("User is from: " + from);
alert("Oh! My best friend grew up in " + from + ", " +  "I wonder if you've ever met them.");
var answers = 0;


var ans1 = document.getElementById('answer1');
var ans2 = document.getElementById('answer2');
var ans3 = document.getElementById('answer3');
var ans4 = document.getElementById('answer4');
var ans5 = document.getElementById('answer5');
var ans6 = document.getElementById('answer6');
var results = document.getElementById('results');


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
    ans1.innerHTML = "Correct!" + "<br><img src='images/correct_response.jpg'>";
    ans1.className = "correct";
    answers++;
  } else if ((home === "NO") || (home === "N")) {
    ans1.innerHTML = "Oh, that is incorrect.";
    ans1.className = "wrong";
  } else {
    ans1.innerHTML = "Invalid answer";
    ans1.className = "wrong";
  }
}

function color () {
  var color = prompt("Alright, " + name + " what is my favorite primary color?").toUpperCase();
  console.log("User answered Q2 with:" + color);

  if (color === "RED") {
    ans2.innerHTML = "Wrong, terrible.";
    ans2.className = "wrong";
  } else if (color === "YELLOW") {
    ans2.innerHTML = "Oh, no...it is not yellow";
    ans2.className = "wrong";
  } else  if (color === "BLUE") {
    ans2.innerHTML = "Yep, I guess it's blue." + "<br><img src='images/color_correct_answer.jpg'>"
    ans2.className = "correct";
    answers++;
  } else {
    ans2.innerHTML = "I'm not sure that's a primary color, " + name + ".";
  }
}

function food () {
  var food = prompt("Alright, " + name + ", do I like ethopian food? 'Yes' or 'No'").toUpperCase();
  console.log("User answered Q3 with: " + food);

  if ((food === "YES") || (food === "YEA") || (food === "Y")) {
    ans3.innerHTML = "Correct." + "<br><img src='images/food_correct.png'>";
    ans3.className = "correct";
    answers++;
  } else if ((food === "No") || (food === "N")) {
    ans3.innerHTML = "Incorrect!";
    ans3.className = "wrong";
  } else {
    ans3.innerHTML = "Invalid answer, " + name + ", no points.";
    ans3.className = "wrong";
  }
}

function favNumber () {
  var favNumber = parseInt(prompt("What is my favorite number between 1 and 30?"));
  console.log("User answered Q3 with: " + favNumber);

  if (favNumber === 15) {
    ans4.innerHTML = "Correct!" + "<br><img src='images/fav_number_correct.jpg'>";
    ans4.className = "correct";
    answers++;
  } else if ((favNumber > 15) && (favNumber < 30)) {
    ans4.innerHTML = "Ah, no you're a little high.";
    ans4.className = "wrong";
  } else if (favNumber < 15) {
    ans4.innerHTML = "Sorry, that's a little low.";
  } else {
    ans4.innerHTML = "I'm not sure that's a number between 1 and 30...";
    ans4.className = "wrong";
  }
}

function fear () {
  var fear = prompt("Am I terrified of birds? 'Yes' or 'No'").toUpperCase();
  console.log("User answered Q4 with: " + fear);

  if ((fear === "YES") || (fear === "Y") || (fear === "YEA")) {
    ans5.innerHTML = "Incorrect! Birds fear me, generally.";
    ans5.className = "wrong";
  } else if ((fear === "NO") || (fear === "N")) {
    ans5.innerHTML = "Correct! Despite their improbable legs, birds inspire no fear in me." + "<br><img src='images/bird_correct.jpg'>";
    ans5.className = "correct";
    answers++;
  } else {
    ans5.innerHTML = "Invalid answer, " + name + ", no points.";
    ans5.className = "wrong";
  }
}

function toeNumber () {
  var toeNumber = parseInt(prompt("How many toes do I have?"));
  console.log("User answered Q6 with: " + toeNumber);

  if (toeNumber === 10) {
    ans6.innerHTML = "Correct! At this point in life I have 10 toes." + "<br><img src='images/toes.jpg'>";
    ans6.className = "correct";
    answers++;
  } else if (toeNumber >= 10) {
    ans6.innerHTML = "Nope, just 10.";
    ans6.className = "wrong";
  } else if (toeNumber <= 10) {
    ans6.innerHTML = "Maybe someday, but so far I still have 10.";
  } else {
    ans6.innerHTML = "I'm not sure that's a number, " + name + ", no points.";
    ans6.className = "wrong";
  }
}

function feedback () {
  if (answers === 1) {
    results.innerHTML = "You only got one right!";
  } else if (answers === 2) {
    results.innerHTML = "You got two right!";
  } else if (answers === 3) {
    results.innerHTML = "You got three right!";
  } else if (answers === 4) {
    results.innerHTML = "You got four right!";
  } else if (answers === 5) {
    results.innerHTML = "You got five right!";
  } else if (answers === 6) {
    results.innerHTML = "You got them all right!";
  } else {
    results.innerHTML = "Terrible job " + name + ", you got them all wrong.";
    var feel = prompt("How do you feel about your loss today?");
    console.log("User feels: " + feel);
  }
}

home();
window.setTimeout(color, 1000);
window.setTimeout(food, 1000);
window.setTimeout(favNumber, 1000);
window.setTimeout(fear, 1000);
window.setTimeout(toeNumber, 1000);
window.setTimeout(feedback, 1000);
