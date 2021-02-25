(function () {
    'using strict';
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('player');
    const score1 = document.getElementById('scorePlayer1');
    const score2 = document.getElementById('scorePlayer2');
    const actionArea = document.getElementById('actions');
    const firstAction = document.getElementById('firstAction');
    const winningPopUp = document.getElementById('whoWon');
    const instructionsPopUp = document.getElementById('instructionPopUp');
    const mainGame = document.getElementById('actualGame');

    const gameData = {
        dice: ['image/1diered.png', 'image/2die.png', 'image/3die.png', 'image/4die.png', 'image/5die.png', 'image/6die.png',],
        players: ['Player 1', 'Player 2'],
        avatars: ['image/player1.png', 'image/player2.png'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        instructionsPopUp.className = "hidden";
        mainGame.className = "shown";
        document.getElementById("footer").className = "shown";
        gameData.index = Math.round(Math.random());
        
        console.log("set up the turn!");
        actionArea.className = "hidden";
        setUpTurn();
    })

    function setUpTurn() {
        game.innerHTML = `<h3>It is ${gameData.players[gameData.index]}'s Turn<h3>`;
        actionArea.className = "hidden";
        firstAction.className = "shown";
        firstAction.innerHTML = '<button id="roll" class="btn">Roll the Dice</button>';
        const rollSound = new Audio('sounds/diceRoll.mp3');
        document.getElementById('roll').addEventListener('click', function(){
            rollSound.play();
            throwDice();
        })
    }

    function throwDice(){
        console.log("throw dice");
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<h3>${gameData.players[gameData.index]}'s Roll</h3>`;
        game.innerHTML += `<img class="die" src="${gameData.dice[gameData.roll1-1]}">
                            <img class="die" src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        document.getElementById('firstAction').className = "hidden";
        actionArea.className = "shown";

        //if two 1's are rolled...
        if(gameData.rollSum === 2){
            console.log("snake eyes were rolled");
            game.innerHTML += '<p>Oh snap! Snake eyes<p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            actionArea.className = "hidden";
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }
        //if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 ===1){
            console.log("one of the dice was a 1");
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry one of your rolls was a 1, switching to ${gameData.players[gameData.index]}<p>`;
            actionArea.className = "hidden";
            setTimeout(setUpTurn, 2000);
        }
        else {
            console.log("the game proceeds");
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            
            document.getElementById('rollagain').addEventListener('click', function() {
                setUpTurn();
                console.log("pressed rolled again");
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
                console.log("pressed pass");
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition() {
        if(gameData.score[gameData.index] > gameData.gameEnd) {
            winningPopUp.innerHTML = `<h2>${gameData.players[gameData.index]} wins
                with ${gameData.score[gameData.index]} points!</h2>`;
                const winningSound = new Audio('sounds/winning.mp3');
                winningSound.play();
                actionArea.className = "hidden";
                document.getElementById('avatarWinner').src = gameData.avatars[gameData.index];
                document.getElementById('winningPopUp').className = "shown";
                mainGame.className = "hidden";

                document.getElementById('playAgain').addEventListener('click', function(){
                    console.log("pressed play again");
                    document.getElementById('winningPopUp').className = "hidden";
                    //reset Game
                    mainGame.className = "shown";
                    gameData.score[0] = 0;
                    gameData.score[1] = 0;
                    showCurrentScore();
                    setUpTurn();

                })

                document.getElementById('quit').addEventListener('click', function(){
                    location.reload();
                })
        }
        else{
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score1.innerHTML = `<h3>${gameData.score[0]} / 30</h3>`;
        score2.innerHTML = `<h3>${gameData.score[1]} / 30</h3>`;
    }

})();