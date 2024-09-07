const game =()=>{
    let playerScore=0;
    let computerScore=0;
    let moves =0;
    const playGame =()=>{
        const rockBtn= document.querySelector('.rock');
        const paperBtn= document.querySelector('.paper');
        const scissorBtn= document.querySelector('.scissor');
        const playerOptions=[rockBtn,paperBtn,scissorBtn];
        const computerOptions=['rock','paper','scissor'];

        playerOptions.forEach(Option =>{
            Option.addEventListener('click', function (){
                const movesLeft=document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText= `Moves Left:  ${10-moves}`;
                
                const choiceNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice);
                if(moves==10){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })

    }
    const winner=(player,computer)=>{
        const result=document.querySelector('.result');
        const playerScoreBoard= document.querySelector('.p_count');
        const computerScoreBoard=document.querySelector('.c_count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player==computer){
            result.textContent='Tie';
        }
        else if(player=='rock'){
            if(computer=='scissor'){
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
            else{
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;
            }
        }
        else if(player=='paper'){
            if(computer=='rock'){
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
            else{
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;
            }
        }
        else if(player=='scissor'){
            if(computer=='paper'){
                result.textContent='Player Won';
                playerScore++;
                playerScoreBoard.textContent=playerScore;
            }
            else{
                result.textContent='Computer Won';
                computerScore++;
                computerScoreBoard.textContent=computerScore;
            }
        }

    }
    const gameOver=(playerOptions,movesLeft)=>{
        const chooseMove = document.querySelector('.Choose');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');
 
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
 
 
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        }
        else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex';
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }
    playGame();
}
game();