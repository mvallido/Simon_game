var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    gamePattern.push(randomChosenColour);
    audio.play();
}

$( ".btn" ).click(function(){
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
})



