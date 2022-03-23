var numbers = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"]

var suits = [" of Hearts", " of Diamonds", " of Clubs", " of Spades"]

//Combine arrays to make deck

function getDeck(numbers, suits) {
    var deck = [];
    for (i in suits) {
        for (j in numbers) {
            deck.push(numbers[j] + suits[i])
        }
    }
    return deck
}

var deck = getDeck(numbers, suits)


//The Fisher-Yates (aka Knuth) Shuffle.

function shuffle(deck) {
  let currentIndex = deck.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex], deck[currentIndex]];
  }

  return deck;
}

var dealer = []
var player = []
var table_cards = []

console.log('Deck length: ', deck.length)

shuffle(deck)

function dealPlayerCards() {
    player.push(deck[0], deck[1]);
    console.log("You have: " + player[0] + ', ' + player[1]);
    dealer.push(deck[2], deck[3]);
    console.log("Dealer has: " + dealer[2] + ', ' + dealer[3]);
}

dealPlayerCards()

console.log('Deck length: ', deck.length)

console.log("Flop: " + deck[4] + ", " + deck[1] + ", " + deck[2]);
deck.shift();
deck.shift();
deck.shift();

console.log('Deck length: ', deck.length)

console.log("Burner")
deck.shift();
console.log("Turn: " + deck[0]);
console.log("Burner")
deck.shift();
console.log("River: " + deck[0]);

console.log('Deck length: ', deck.length)

shuffle(deck)

console.log('Deck length: ', deck.length)

//dont shift elements, add them to player and dealer arrays, then arrays for flop/turn/river cards. THEN add the elements back into the deck and shuffle.

/*create function to calc who wins. Comparing cards:*/

var card_points = {
    two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,jack:11,queen:12,king:13,ace:14
}

var hand_points = {
    high_number:15,
    pair:16,
    two_pair:17,
    three_of_a_kind:18,
    straight:19,
    flush:20,
    full_house:21,
    four_of_a_kind:22,
    straight_flush:23,
    royal_flush:24
}


