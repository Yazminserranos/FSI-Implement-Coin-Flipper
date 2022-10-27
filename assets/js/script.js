// TODO: Declare any global variables we need
let flipresult;
let numFlips;
let percHeads;
let numbHeads;
let numTails;


//Dom Elements
let pennyImg="";
let tailsImg ="";
let statusMsgDiv= document.createElement('div');
let percHeadsBox = document.querySelector("#heads-percent");
let percTailsBox = document.querySelector("#tails-percent");
let numHeadsBox = document.querySelector("#heads");
let numTailsBox= document.querySelector("#Tails");
let flipBtn = document.createElement("#flip");
let clearBtn = document.createElement("#clear");

flipBtn.addEventListener('DOMContentLoaded', () => {
document.getElementById('flip').addEventListener('click', () => {
    let flipresult = Math.random() < 0.5


if (flip<0.5) {
    Image.src = tailsImg;
    statusMsgDiv.textContent= "you flipped heads";
} else if (flip >= 0.5) {
    Image.src = headsImg;
    statusMsgDiv.textContent = "you Flipped Heads";
    numFlips += 1;
    numHeads += 1;

    percHeadsBox.textContent= "";
    percTailsBox;
    numHeadsBox;
    numTailsBox;
}
}


}

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})