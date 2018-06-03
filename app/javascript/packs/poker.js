import royalFlush from "./royalFlush"
let fs = require("fs");

let textFile = fs.readFileSync("../../assets/images/pokerHands.txt").toString('utf-8');
let hands = textFile.split("\n");

let poker = (hands) => {
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


poker(hands);
