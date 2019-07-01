    var wins = 0;
    var losses = 0;
    var guesses = 15;
    var directionsText = document.getElementById ("directions-text");
    var userChoiceText = document.getElementById ("userchoice-text");
    var winsText = document.getElementById ("wins-text");
    var guessesText = document.getElementById ("guesses-text");
    var lossesText = document.getElementById ("losses-text");


    document.onkeypress = function(event) 
    {
    
      // Determines which key was pressed.
      var userGuess = event.key;
        
      if(userGuess === 'r' || userGuess === 'p' || userGuess === 's')
      {
      userChoiceText.textContent = "You chose: " + userGuess.toUpperCase();
      computerChoiceText.textContent = "Computer Chose: " + computerGuess.toUpperCase();
      winsText.textContent = "Total Wins: " + wins;
      lossesText.textContent = "Total Losses: " + losses;
      tiesText.textContent = "Total Ties: " + ties;
      avgText.textContent = "Your Win Average is: " + avg1 + "%";
      }

      if ((userGuess == "s") && (computerGuess == "p") ||
         (userGuess == "r") && (computerGuess == "s") ||
         (userGuess == "p") && (computerGuess == "r")) 
      {
      wins++; 
      }
        else if (userGuess === computerGuess) 
        {
          ties++;
        }
      else 
      {
        losses++;
      }

    };
