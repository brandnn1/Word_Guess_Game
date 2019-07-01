    var wins = 0;
    var losses = 0;
    var ties = 0;
    var directionsText = document.getElementById ("directions-text");
    var userChoiceText = document.getElementById ("userchoice-text");
    var computerChoiceText = document.getElementById ("computerchoice-text");
    var winsText = document.getElementById ("wins-text");
    var lossesText = document.getElementById ("losses-text");
    var tiesText = document.getElementById ("ties-text");
    var avgText = document.getElementById ("winlossavg-text");


    document.onkeypress = function(event) 
    {
    
      // Determines which key was pressed.
      var userGuess = event.key;