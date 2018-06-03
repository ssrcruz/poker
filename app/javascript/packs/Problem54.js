/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let fs = require("fs");

let textFile = fs.readFileSync("./pokerHands.txt").toString('utf-8');
let hands = textFile.split("\n");


let playerOneWins = 0;
let playerTwoWins = 0;

poker = (hands) => {
    let playerOne = [];
    let playerTwo = [];

    for (let i = 0; i <= hands.length; i++) {
        let playerOneHand = [];
        let playerTwoHand = [];
        
        let playerHands = hands[i].split(' ');

        for (let k = 0; k <= playerHands.length; k++) {
            if (k < 5) {
                playerOneHand.push(playerHands[k]);
            } else if (k >= 5) {
                playerTwoHand.push(playerHands[k]);
            }
        }
        
        playerOne.push(playerOneHand);
        playerTwo.push(playerTwoHand);
        
        if (i === hands.length - 1) return royalFlush(playerOne, playerTwo, hands);
    }
};


royalFlush = (playerOne, playerTwo, hands) => {
    let playerOneHand = playerOne;
    let playerTwoHand = [];
    for (i in playerTwo) {
        playerTwoHand.push(playerTwo[i].filter(Boolean));
    };
    
    let spades = ['TS', 'JS', 'QS', 'KS', 'AS'];
    let clubs = ['TC', 'JC', 'QC', 'KC', 'AC'];
    let hearts = ['TH', 'JH', 'QH', 'KH', 'AH'];
    let diamonds = ['TD', 'JD', 'QD', 'KD', 'AD'];
          
    let winningHands = [spades, clubs, hearts, diamonds];
    
    for (b in hands) {
        for (let a = 0; a < winningHands.length; a++) {
            let playerOneMatchingValues = [];
            let playerTwoMatchingValues = [];
            let playerOneValue = 0;
            let playerTwoValue = 0;
            
            for (c in winningHands[a]) {
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

// Check if all cards are consecutive values of same suit.
straightFlush = (playerOneHand, playerTwoHand) => {
    
    let spades = ['2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', 'TS', 'JS', 'QS', 'KS', 'AS'];
    let clubs = ['2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', 'TC', 'JC', 'QC', 'KC', 'AC'];
    let hearts = ['2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', 'TH', 'JH', 'QH', 'KH', 'AH'];
    let diamonds = ['2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', 'TD', 'JD', 'QD', 'KD', 'AD'];

    let winningValues = [spades, clubs, hearts, diamonds];
    
    // compare hands   
    let compareArrays = (array1, array2) => {
        if (array1.length !== array2.length) return false;
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) return false;
        }
        return true;
    };
    
    // check if a hand matches any of the possible winning hands
    let allHands = (array, playerMatchingValues) => {
        let winningHands = [];
        
        for (let a = 0; a <= 5; a++) {
            let hand = array.slice(a, a + 5);
            winningHands.push(hand);    
        };
        
        for (i in winningHands) {
            if (compareArrays(winningHands[i], playerMatchingValues)) {
                console.log(winningHands[i], playerMatchingValues);
                return true;
            }
        }
        return false;
    };
    
    // check if hand is a straight flush 
    let isStraightFlush = (playerMatchingValues) => {
        let arrayOfValues = [];
        for (i in playerMatchingValues) {
            let cardValues = playerMatchingValues[i].split('');
            if (cardValues[1] === 'S') {
                let isMatch = allHands(clubs, playerMatchingValues.sort());
                return isMatch;
                break;
            }

            if (cardValues[1] === 'C') {
                let isMatch = allHands(clubs, playerMatchingValues.sort());
                return isMatch;
                break;
            }

            if (cardValues[1] === 'H') {
                let isMatch = allHands(clubs, playerMatchingValues.sort());
                return isMatch;
                break;
            }

            if (cardValues[1] === 'D') {
                let isMatch = allHands(clubs, playerMatchingValues.sort());
                return isMatch;
                break;
            }
            arrayOfValues.push(cardValues);

        }  
    };
    
    for (i in winningValues) {
        let playerOneMatchingValues = [];
        let playerTwoMatchingValues = [];
        
        let playerOneValue = 0;
        let playerTwoValue = 0;
        
        for (c in winningValues[i]) {
            let playerOneIncludes = playerOneHand.includes(winningValues[i][c]);
            let playerTwoIncludes = playerTwoHand.includes(winningValues[i][c]);
          
            if (playerOneIncludes === true) {
                playerOneValue++;
                playerOneMatchingValues.push(winningValues[i][c]);
            };
            if (playerTwoIncludes === true) {
                playerTwoValue++;
                playerTwoMatchingValues.push(winningValues[i][c]);
            };
        };  
        
        // If player one has 5 matching values, check if they are all consecutive values with same suit
        if (playerOneValue === 5 && playerTwoValue < 5) {
            if (isStraightFlush(playerOneMatchingValues)) playerOneWins++;
        }
        
        if (playerTwoValue === 5 < playerOneValue < 5) {
            if (isStraightFlush(playerTwoMatchingValues)) playerTwoWins++;
        };
        
        if (playerOneValue < 5 && playerTwoValue < 5) return fourOfAKind(playerOneHand, playerTwoHand);
    }
};

// check if both hands have four cards of the same value
fourOfAKind = (playerOneHand, playerTwoHand) => {
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

    let getAllCardValues = (playerHand, values) => {
        let cardValues = [];
        // Split values from player one hands
        for (a in playerHand) {
            let value = playerHand[a].split('');
            cardValues.push(value[0]);
        };
        // check if the hand has four cards of the same values

        for (b in values) {
            let cardValue = values[b];
            let count = 0;
            for (c in cardValues) {
                if (cardValues[c] === cardValue){
                    count++;
                }
            }
            
            let win = false;
            if (count === 4) {
                console.log("Wins by four of a kind!");
                let win = true;
            }
            return win;
        }
    };

    if (getAllCardValues(playerOneHand, values) === true && getAllCardValues(playerTwoHand, values) === false) {
        playerOneHand++;
    } else if (getAllCardValues(playerTwoHand, values) === true && getAllCardValues(playerOneHand, values) === false) {
        playerTwoHand++;
    } else {
        fullHouse(playerOneHand, playerTwoHand);
    };

};

fullHouse = (playerOneHand, playerTwoHand) => {
    console.log(playerOneHand, playerTwoHand);
};

console.log(poker(hands));