// Check if all cards are consecutive values of same suit.
import fourOfAKind from "./fourOfAKind";

let straightFlush = (playerOneHand, playerTwoHand) => {
    
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
        
        for (let i = 0; i < winningHands.length; i++) {
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
        for (let i = 0; i < playerMatchingValues.length; i++) {
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
    
    for (let i = 0; i < winningValues.length; i++) {
        let playerOneMatchingValues = [];
        let playerTwoMatchingValues = [];
        
        let playerOneValue = 0;
        let playerTwoValue = 0;
        
        for (let c = 0; c < winningValues[i].length; c++) {
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

export default straightFlush;

