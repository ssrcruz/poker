import straightFlush from "./straightFlush";

export let playerOneWins = 0;
export let playerTwoWins = 0;
let royalFlush = (playerOne, playerTwo, hands) => {
    let playerOneHand = playerOne;
    let playerTwoHand = [];
    for (let i = 0; i < playerTwo.length; i++) {
        playerTwoHand.push(playerTwo[i].filter(Boolean));
    };
    
    let spades = ['TS', 'JS', 'QS', 'KS', 'AS'];
    let clubs = ['TC', 'JC', 'QC', 'KC', 'AC'];
    let hearts = ['TH', 'JH', 'QH', 'KH', 'AH'];
    let diamonds = ['TD', 'JD', 'QD', 'KD', 'AD'];
          
    let winningHands = [spades, clubs, hearts, diamonds];

    for (let b = 0; b < hands.length; b++) {
        for (let a = 0; a < winningHands.length; a++) {
            let playerOneMatchingValues = [];
            let playerTwoMatchingValues = [];
            let playerOneValue = 0;
            let playerTwoValue = 0;
            
            for (let c = 0; c < winningHands[a].length; c++) {
                let playerOneIncludes = playerOneHand[b].includes(winningHands[a][c]);
                let playerTwoIncludes = playerTwoHand[b].includes(winningHands[a][c]);
                if (playerOneIncludes === true) {
                    playerOneValue++;
                    playerOneMatchingValues.push(winningHands[a][c]);
                }
                if (playerTwoIncludes === true) {
                    playerTwoValue++;
                    playerTwoMatchingValues.push(winningHands[a][c]); 
                }
            }
            
            if (playerOneValue === 5 && playerTwoValue < 5) {
                playerOneWins++;
                console.log(playerOneMatchingValues, playerOneHand[b], playerOneWins);
                console.log(b + " Player 1 Wins! by royal flush", playerOneWins);
                break;
            } else if (playerTwoValue === 5 && playerOneValue < 5) {
                playerTwoWins++;
                console.log(playerTwoMatchingValues, playerTwoHand[b], playerTwoWins);
                console.log(b + " Player 2 Wins! by royal flush", playerTwoWins);
                break;
            } else if (playerOneValue === 5 && playerTwoValue === 5) {
                console.log("It's a tie");
            } else if (a === winningHands.length - 1){
                straightFlush(playerOneHand[b], playerTwoHand[b]);
            };
        }
    }
    console.log("Player 1 Wins: " , playerOneWins);
    console.log("Player 2 Wins: " , playerTwoWins);
};

export default royalFlush;
