var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];



function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    gamePattern.push(randomChosenColour);
    audio.play();
}

    

