var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;

$("body").keypress(function(){
    if (gameStarted === false){
        nextSequence();
        gameStarted = true;
    }    
});

function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++;
    $("h1").text("Level " + level);

    userClickedPattern.length = 0;
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("."+currentColour).addClass("pressed")
    setTimeout(function(){
         $("."+currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("true");
        console.log(userClickedPattern);
        console.log(gamePattern);
        
        if(userClickedPattern.length === gamePattern.length){
            console.log("true"); 
            setTimeout(nextSequence,1000);
        } 
    }else{
        console.log("false");
    }
}

$(".btn").click(function(){
    var userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
})



