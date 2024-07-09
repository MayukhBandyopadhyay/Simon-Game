
var pattern=[];
var userSelectedPattern=[];
var level=0;
var c=0;
var l=0;
$(document).keydown(function(event){
    if(l==0)
    {
        nextSquence();
        l++;
    }
});
function playSound(randomChosenColour){
    var audio = new Audio("sounds/"+randomChosenColour+".mp3");
      audio.play();
    }
function nextSquence(){
    userSelectedPattern=[];
    c=0;
    level++;
    $("h1").text("level "+level);
    var ranNum=Math.floor(4*Math.random());
    var colour1=["red", "blue", "green", "yellow"];
    playSound(colour1[ranNum]);
    var randomChosenColour=colour1[ranNum];
    pattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    console.log(pattern);
}
$(".btn").click(function(){
    userSelectedPattern.push($(this).attr("id"));
    console.log(userSelectedPattern);
    animatePressed($(this).attr("id"));
    checkAnswer(c);
    c++;
    console.log(1);
    if(c==pattern.length){
        nextSquence();
    }
    
});
function animatePressed(pressedButton){
    $("#"+pressedButton).addClass("pressed");
    setTimeout(()=>{$("#"+pressedButton).removeClass("pressed")},100);
}
function checkAnswer(curIndex){
    if(userSelectedPattern[curIndex]===pattern[curIndex]){
        console.log("success");
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(()=>{$("body").removeClass("game-over")},200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
function startOver(){
    level=0;
    c=0;
    pattern=[];
    userSelectedPattern=[];
    l=0;
}