
let score = JSON.parse(localStorage.getItem('score'))
if(score == null){
    score={
        Win :0,
        Loss : 0,
        Tie : 0
    }
}

updateScore();


function playGame(playerMove){
const computerMove = pickComputerMove();
let result = '';

if(playerMove === 'Scissor'){
    if(computerMove === 'Rock'){
        result = 'You Lose';
    }
    else if (computerMove === 'Paper'){
        result='You Win';
    }
    else if(computerMove === 'Scissor'){
        result = 'Tie';
    }
}
else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
        result = 'You Win';
    }
    else if (computerMove === 'Paper'){
        result='Tie';
    }
    else if(computerMove === 'Scissor'){
        result = 'You Lose';
    }
}
else if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
        result = 'Tie';
    }
    else if (computerMove === 'Paper'){
        result='You Lose';
    }
    else if(computerMove === 'Scissor'){
        result = 'You Win';
    }

}
if (result === 'You Win') {
  score.Win += 1;
} else if (result === 'You Lose') {
  score.Loss += 1;
} else if (result === 'Tie') {
  score.Tie += 1;
}

localStorage.setItem('score' , JSON.stringify(score));

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = ` You
<img src="${playerMove}-emoji.png" class="move-icon" >
computer 
<img src="${computerMove}-emoji.png" class="move-icon" >`;

updateScore();
}

function updateScore(){
    document.querySelector('.js-score').innerHTML =`Wins: ${score.Win}, Losses: ${score.Loss}, Ties: ${score.Tie} ` ;
}

function pickComputerMove(){
const randomNumber = Math.random();
let computerMove = '';


if(randomNumber >=0 && randomNumber<1/3){
    computerMove = 'Rock';
}
else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove ='Paper';
}
else if(randomNumber>=2/3 && randomNumber<1 ){
    computerMove ='Scissor';
}

return computerMove;
}
