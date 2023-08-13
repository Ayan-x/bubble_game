var timer = 20;
var score = 0;
var hitrn;
function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;

}
 
function increaseScore(){
    score += 10;
    document.querySelector("#inscore").textContent = score;
}

function bubbleMaker(){
    var clutter = "";
for(var i = 0; i<= 300; i++){
    var a = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${a}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else{
            clearInterval(timerInt);
            var s = document.querySelector("#pbtm");
            s.innerHTML = `<h1>Your Score - ${score}</h1>`;
            

        }
        
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(details){
    var targethit = details.target.textContent;
    if(hitrn == targethit){
        increaseScore();
        hit();
        bubbleMaker();

    }
})

hit();
runTimer();
bubbleMaker();
