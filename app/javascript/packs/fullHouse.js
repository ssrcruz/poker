// Three of a kind and a pair.

import flush from "./flush";

let fullHouse = (playerOneHand, playerTwoHand) => {
  let playerOneHandValues = [];
  for (let i = 0; i < playerOneHand.length; i++) {
      let value = playerOneHand[i].split("");
      playerOneHandValues.push(value[0]);
  };
  
  let playerTwoHandValues = [];
  for (let i = 0; i < playerTwoHand.length; i++) {
      let value = playerTwoHand[i].split("");
      playerTwoHandValues.push(value[0]);
  };
 
  let counts = {};
  
  let threeAndAPair = (playerOneHandValues) => {
    playerOneHandValues.forEach(function(x) {
        counts[x] = ( counts[x] || 0)+1;
        if (counts[x] == 3) {
            let checkPair = playerOneHandValues.filter(a => a != x);
            for (let i = 0; i < checkPair.length; i++) {
                if (checkPair[i] == checkPair[i + 1]) {
                    return true;
                };
            };
        }
    });
    return false;
  };
  
  if ((threeAndAPair(playerOneHandValues) === true) && (threeAndAPair(playerTwoHandValues) === false)) {
      console.log("Player one wins! " , playerOneHand);
      playerOneWins++;
  } else if ((threeAndAPair(playerTwoHandValues) === true) && (threeAndAPair(playerOneHandValues) === false)) {
      console.log("Player two wins! " , playerTwoHand);
      playerTwoWins++;
  } else {
      flush(playerOneHand, playerTwoHand);
  };
  threeAndAPair(playerOneHandValues);
  threeAndAPair(playerTwoHandValues);
//  console.log(threeAndAPair(playerOneHandValues));
};

export default fullHouse;
