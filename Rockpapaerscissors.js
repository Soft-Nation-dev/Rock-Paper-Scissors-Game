
    const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
    }

   updateScore();

    function playGame(playerMove){
        const computerMove = pickcomputerMove();
        let result = '';
            if(playerMove === 'scissors'){
                if(computerMove ==='rock'){
                    result = 'You loose.';
                } else if (computerMove === 'paper'){
                    result = 'You won.';
                } else if (computerMove === 'scissors'){
                    result = 'Tie.';
                }
            }

            else if (playerMove === 'paper'){
                if(computerMove ==='scissors'){
                    result = 'You loose.';
                } else if (computerMove === 'paper'){
                    result = 'Tie.';
                } else if (computerMove === 'rock'){
                    result = 'You won.';
                }

            }

            else if (playerMove === 'rock'){
                if(computerMove ==='rock'){
                    result = 'Tie.';
                } else if (computerMove === 'paper'){
                    result = 'You loose.';
                } else if (computerMove === 'scissors'){
                    result = 'You won.';
                }
            }

            if (result === 'You won.'){
                score.wins += 1
            } else  if (result === 'You loose.'){
                score.losses += 1
            } else  if (result === 'Tie.'){
                score.ties += 1
            } 
            localStorage.setItem('score', JSON.stringify(score));
            const moveElement = document.querySelector('.js-move');
    moveElement.innerHTML = `You picked
    <img class="limage" src="Images/${playerMove}-emoji.png" alt="">
    Computer picked
    <img class="limage" src="Images/${computerMove}-emoji.png" alt="">`;
    const resultElement = document.querySelector('.js-result');
    resultElement.innerHTML = `${result}`
           updateScore();
        }
        function reset (){
            score.wins = 0;
            score.losses = 0;
            score.ties = 0;
            updateScore();
        }

        function updateScore (){
             const scoreElement = document.querySelector('.js-score');
             scoreElement.innerHTML = `Wins: ${score.wins}, Losses ${score.losses}, Tie: ${score.ties}`
        }

        function pickcomputerMove() {
            let computerMove = '';
            const randomNumber1 = Math.random();

    if(randomNumber1 >= 0 && randomNumber1 < 1/3){
            computerMove ='rock';
        } else if(randomNumber1 >= 1/3 && randomNumber1 < 2/3){
            computerMove ='paper';
        } else if(randomNumber1 >= 2/3 && randomNumber1 < 1){
            computerMove ='scissors';
            } 
            return computerMove;
    }