let flush = (playerOneHand, playerTwoHand) => {
    let suits = (playerHand) => {
        let hand = [];
        playerHand.forEach(function(card){ 
            let suit = card.split("");
            hand.push(suit[1]);
        });
        
        let compare = (hand) => {
            hand.every(function(value, _, array){
                console.log(array[0] === value);
            });
        };
        
       console.log(compare(hand));
    };
    
    suits(playerOneHand);
    suits(playerTwoHand);
    console.log(suits(playerOneHand), suits(playerTwoHand));
};

export default flush; 