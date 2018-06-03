// check if both hands have four cards of the same value
import fullHouse from "./fullHouse";

let fourOfAKind = (playerOneHand, playerTwoHand) => {
    let values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

    let getAllCardValues = (playerHand, values) => {
        let cardValues = [];
        // Split values from player one hands
        for (let a = 0; a < playerHand.length; a++) {
            let value = playerHand[a].split('');
            cardValues.push(value[0]);
        };
        // check if the hand has four cards of the same values

        for (let b = 0; b < values.length; b++) {
            let cardValue = values[b];
            let count = 0;
            for (let c = 0; c < cardValues.length; c++) {
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

export default fourOfAKind;


