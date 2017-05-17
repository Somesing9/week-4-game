var crystalCollector = {
    wins : null,
    losses: null,
    score : null,
    theNumber : null,
    crystalValues : [],


    // Function to set up the game
    setUpGame : function() {
        score = 0;
        wins = 0;
        losses = 0;
        theNumber = Math.floor(Math.random() * 108) + 19;
        for (var i = 0; i < 4; i++) {
            var possibleValue = Math.floor(Math.random() * 12) + 1;
            while (this.crystalValues.indexOf(possibleValue) >= 0) {
                possibleValue = Math.floor(Math.random() * 12) + 1;
            }
            this.crystalValues[i] = possibleValue;
            console.log(this.crystalValues[i]);
        }       
        this.updateDisplay();
    },

    // Reset the game
    resetGame : function() {
        score = 0;
        theNumber = Math.floor(Math.random() * 108) + 12;
        for (var i = 0; i < 4; i++) {
            var possibleValue = Math.floor(Math.random() * 12) + 1;
            while (this.crystalValues.indexOf(possibleValue) >= 0) {
                possibleValue = Math.floor(Math.random() * 12) + 1;
            }
            this.crystalValues[i] = possibleValue;
            console.log(this.crystalValues[i]);
        }    

        this.updateDisplay();
    },

    updateScore : function(crystalNumber) {
        score += this.crystalValues[crystalNumber];
        this.updateDisplay();
        
        if (score === theNumber) {
            wins++;
            this.resetGame();
        }

        if (score > theNumber) {
            losses++;
            this.resetGame();
        }
    },

    updateDisplay : function() {
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#theNumber").text(theNumber);
        $("#currentScore").text(score);
    }

};

var theGame = crystalCollector.setUpGame();

$("#btn1").on("click", function() {
    crystalCollector.updateScore(0);

});
$("#btn2").on("click", function() {
    crystalCollector.updateScore(1);

});
$("#btn3").on("click", function() {
    crystalCollector.updateScore(2);

});
$("#btn4").on("click", function() {
    crystalCollector.updateScore(3);

});
