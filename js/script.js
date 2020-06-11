// script.js
// Weekly Assignment No. 6

/*
* All of the code must be adequetely commented.
* This includes the code that you write and the code that was provided.
*/

class PlayingCard {
    constructor(element, face, suit) {
        /*
        Create properties for:
        - element
        - suit
        - face
        - img (set this to `img/${face}_of_${suit}.png`)
        - state (set this to 0)
        */

        this.element = element
        this.suit = suit
        this.face = face
        this.img = `img/${face}_of_${suit}.png`
        this.state = 0

        this.element.addEventListener('click', () => {
            /*
            - The event listener should be for a click event
            - The event listener should have logic to switch out the this.element.src
            - It should also change the state if the card is flipped (this.state 0 or 1)
            - To show the back of the card use 'img/back.png'
            */
            this.state = (this.state == 0) ? 1 : 0
            if (this.state == 0) {
                this.showBacks()
            }
            else {
                this.showFaces()
            }
        })
    }

    showFaces() {
        // Show the face image and set the
        // state to 1
        this.element.src = this.img
        this.state = 1
    }

    showBacks() {
        // Show the back of the card and set
        // the state to 0
        this.element.src = 'img/back.png'
        this.state = 0
    }
}

function createCardImage() {
    /*
    - Create a constant named img and have it create a new img element
    - Set the src property of the img to 'img/back.png'
    - return the img
    */

    // Create the image element and set the src
    // to the default card back image.
    let image = document.createElement('img')
    image.src = 'img/back.png'

    // Return image element of card
    return image
}

function displayDeck() {
    /*
    - Create a loop that iterates through each card in the deck array
    - in the loop, append the card.element to the container
    - Use a forEach with an arrow function
    */

    // Iterate through the deck array
    deck.forEach(card => {
        // Add the card object's associated
        // element to the container element
        container.append(card.element)
    })
}

function shuffleDeck() {
    // Sort the deck array using a compare 
    // function that randomizes the sort that 
    // occurs
    for (let i = 0; i < 1000; i++) {
        deck.sort(() => Math.random() - 0.5)
    }
}

function removeCard() {
    // If the deck is not empty, select the first 
    // card image element in the container and
    // remove it from the container. Also remove
    // the card object from the deck array.
    if (deck.length != 0) {
        card = document.querySelector('img')
        card.remove()
        deck.shift()
        if (deck.length == 0) {
            // If there are no card objects in the deck array
            // show text that says there are no more cards
            // left in the deck.
            actions.innerHTML = 'No cards left in the deck. :-('
        }
    }
}

function buildDeck() {
    // Set up arrays with possible suits and faces.
    const suits = ['hearts', 'spades', 'diamonds', 'clubs']
    const faces = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king']

    // Go through each suit and face combination possible.
    suits.forEach(suit => {
        faces.forEach(face => {
            /*
            - Call the createdCardImage() function and assign the return img element to a variable named image
            - Set the id attribute of the image to `${face}_of_${suit}.png`
            - Use the .push method to push a new PlayingCard object into the deck array
            - Do the .push and object creation in a single statement
            */

            // Create an image element with an id of `${face}_of_${suit}.png`.
            let image = createCardImage()
            image.id = `${face}_of_${suit}.png`
            // Push a newly created PlayingCard object to the deck array
            // with the created image elemnt as the first argument, along 
            // with the face and suit values as the 2nd and 3rd argument.
            deck.push(new PlayingCard(image, face, suit))
        })
    })
}

// Clear the actions box to clear out messages about 
// the recent action done.
function clearActions() {
    actions.innerHTML = ''
}

let deck = []

const container = document.querySelector('#container')
const actions = document.querySelector('#actions')
const shuffleBtn = document.querySelector('#shuffle')
const removeBtn = document.querySelector('#remove')
const newDeckBtn = document.querySelector('#newdeck')
const showFacesBtn = document.querySelector('#showfaces')
const showBacksBtn = document.querySelector('#showbacks')

// Create a 'click' event handler that tells user via
// action container that the deck has been shuffled, clears
// the container element that contains card image elements, 
// shuffles the deck array, and then displays the shuffled deck 
// after 0.5 seconds. After 5 seconds, clear the 'actions' container.
shuffleBtn.addEventListener('click', () => {
    // Notify the user
    actions.innerHTML = 'The deck of cards has been shuffled.'
    // Clear the card container
    container.innerHTML = ''
    // Shuffle the deck
    shuffleDeck()
    // Display the deck after 0.5 seconds
    setTimeout(displayDeck, 500)
    // Clear the notification after 5 seconds
    setTimeout(clearActions, 5000)
})

// Add a 'click' event handler to the remove button
// that notifies the user via the action container
// that a card was removed. It then removes the
// first card from the deck along with the first image
// element from the card container element. After
// 5 seconds, the actions container element is cleared
removeBtn.addEventListener('click', () => {
    // Notify the user
    actions.innerHTML = 'A card was removed.'
    // Remove the card
    removeCard()
    // After 5 seconds, clear the notification
    setTimeout(clearActions, 5000)
})

// Add a 'click' event handler to the new deck button
// that notifies the user via the action container element
// that a new deck of cards has been created. Set the deck
// array to an empty array. Clear the card container element
// and build a new deck. After 0.5 seconds, display the deck
// via the card container element. After 5 seconds, remove
// the text notification from the action container element.
newDeckBtn.addEventListener('click', () => {
    // Notify the user
    actions.innerHTML = 'A new deck of cards has been created.'
    // Set the deck array to an empty array
    deck = []
    // Clear the card container
    container.innerHTML = ''
    // Build a new deck
    buildDeck()
    // Display the deck after 0.5 seconds
    setTimeout(displayDeck, 500)
    // Clear the notification after 5 seconds
    setTimeout(clearActions, 5000)
})

// Add a 'click' event handler to the show faces button
// that notifies the user via the action container element
// that all the card faces are now showing. Go through the deck
// array and call the showFaces function on all the cards.
showFacesBtn.addEventListener('click', () => {
    // Notify the user
    actions.innerHTML = 'All card faces are now showing.'
    // Go through the deck array and show the faces of each
    // card in the deck array
    deck.forEach(card => {
        card.showFaces()
    })
})

// Add a 'click' event handler to the show backs button
// that noifies the user via the action container element
// that all the card backs are now showing. Go through the 
// deck array and call the showBacks function on all the card
// objects in the deck array.
showBacksBtn.addEventListener('click', () => {
    // Notify the user
    actions.innerHTML = 'All card backs are now showing.'
    // Go through the deck array and show the backs of each
    // card in the deck array
    deck.forEach(card => {
        card.showBacks()
    })
})

// Initialize the deck by building it
buildDeck()
// Shuffle the newly built deck
shuffleDeck()
// Display the deck to the card container element.
displayDeck()