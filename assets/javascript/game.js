var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"
    , "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomN;
var letter;
//var isUsed;
var used = [];
var live = 10;
var winN = 0;
var lossN = 0;
////////////////////////////////////////////////////////
//generate random letter from the alphabet ands start the game
function randomLetter() {
    randomN = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomN);
    document.getElementById("play").innerHTML = "Game start!";
    document.getElementById("warning").innerHTML = "New letter, make your guess!";
    used = [];
    live = 10;
    document.getElementById("usedword").innerHTML = "";
    document.getElementById("lives").innerHTML = 10;
    leter= "";
    keypress();

};

//reset if win or loss
function reset() {
    randomN = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomN);
    used = [];
    live = 10;
    document.getElementById("lives").innerHTML = 10;
    //document.getElementById("warning").innerHTML= "";

};

//reset to start new game
function startNew() {
    randomN = "";
    letter = "";
    used = [];
    live = 10;
    winN = 0;
    lossN = 0;
    //console.log(randomN);
    document.getElementById("lives").innerHTML = 10;
    document.getElementById("warning").innerHTML = "";
    document.getElementById("play").innerHTML = "";
    document.getElementById("usedword").innerHTML = "";
    document.getElementById("win").innerHTML = 0;
    document.getElementById("loss").innerHTML = 0;
};


//isLetterUsed function, return boolean check if letter is in used array
function isLetterUsed(x, arr) {
    return arr.includes(x);
};

//wordHadUsed(letter, used, "usedword", "warning");
//check for empty and used, if not push the letter into the array
function wordHadUsed(x, arr, id1, id2) {
    if (arr.length === 0 || isLetterUsed(x, arr) === false) {
        arr.push(x);
        document.getElementById(id1).innerHTML = arr.toString();
        //console.log(arr);
    } else {
        document.getElementById(id2).innerHTML = "You already use this word!";
    }
};

//check isCorrect increase win count if guess match up with generate letter
function isCorrect(randomN, letter) {
    if (randomN === letter) {
        winN++;
        document.getElementById("win").innerHTML = winN;
        document.getElementById("warning").innerHTML = "YOU WIN!!!";
        reset();
    }
};

//decrease live count if guess is not match up with generate letter
function notCorrect(randomN, letter, used) {
    if (randomN != letter && isLetterUsed(letter, used) === false) {
        live--;
        document.getElementById("lives").innerHTML = live;
    }
};

//increase loss count if live reach 0
function liveLoss(live, lossN) {
    if (live === 0) {
        lossN++;
        document.getElementById("loss").innerHTML = lossN;
        document.getElementById("warning").innerHTML = "YOU LOSS!!!";
        reset();
    }
};



/////////////////////////////////////////////////////////
//function to do thing when key press
function keypress() {
    document.onkeyup = function (event) {
        for (var i = 0; i < alphabet.length; i++) {
            if (event.key.toLowerCase() === alphabet[i].toLowerCase()) {
                letter = event.key.toLowerCase();

            }
        }
        console.log(letter);

        //check if letter had been used?????????
        var isused = isLetterUsed(letter, used);
        console.log(isLetterUsed(letter, used));
        //console.log(used.length);

        //push the letter into the used array when press, don't add if duplicate
        wordHadUsed(letter, used, "usedword", "warning");

        isCorrect(randomN, letter);

        //decrease live count if guess is not match up with generate letter
        if (used.length != 0 && randomN != letter && isused === false) {
            live--;
            document.getElementById("lives").innerHTML = live;
        };

        //increase loss count if live reach 0
        //liveLoss(live, lossN);
        if (live === 0) {
            lossN++;
            document.getElementById("loss").innerHTML = lossN;
            document.getElementById("warning").innerHTML = "YOU LOSS!!!";
            reset();
        }
        //end of onkeyup
    }
}