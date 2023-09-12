//--- D20 ---//
var d20Count = 0; // Counter for D20 rolls
var gameStatuses = []; // Array to store game statuses

function rollD20() {
  var d20Result = document.getElementById("d20Result");
  var d20 = Math.floor(Math.random() * 20 + 1);
  d20Result.innerHTML = d20;

  // Increment the counter 
  d20Count++; 

  // Check if one roll has been made
  if (d20Count === 1) {
    // Perform Queen #1 selection
    selectQueenOne(d20); 
  }
  // Check if two rolls have been made
  if (d20Count === 2) {
    // Perform Queen #2 selection
    selectQueenTwo(d20); 
  }
  // Check if three rolls have been made
  if (d20Count === 3) {
    // Perform Queen #3 selection
    selectQueenThree(d20); 
  }
  // Check if four rolls have been made
  if (d20Count === 4) {
    // Perform Queen #4 selection
    selectQueenFour(d20); 
  } 
  // Check if five rolls have been made
  if (d20Count === 5) {
    // Perform Queen #5 selection
    selectQueenFive(d20); 
  }
  // Check if all queens have been selected
  if (d20Count === 5) {
    document.getElementById("continueButton").disabled = false;
    document.getElementById("restartButton").style.display = "block";
  }
};

// Queen Selection logic
function selectQueenOne(result) {
  var gameStatus = document.getElementById("queenOne");
  
  // Check the result and assign the corresponding queen
  if (result === 1 || result === 6 || result === 11 || result === 16) {
    gameStatus.innerHTML = "You are the Oracle Queen";
  } else if (result === 2 || result === 7 || result === 12 || result === 17) {
    gameStatus.innerHTML = "You are the Warrior Queen";
  } else if (result === 3 || result === 8 || result === 13 || result === 18) {
    gameStatus.innerHTML = "You are the Druid Queen";
  } else if (result === 4 || result === 9 || result === 14 || result === 19) {
    gameStatus.innerHTML = "You are the Elemental Queen";
  } else if (result === 5 || result === 10 || result === 15 || result === 20) {
    gameStatus.innerHTML = "You are the Poisoner Queen";
  }

  // Update the health percentage for Queen #1
  const queenOneHealthPercentage = document.getElementById('queenOneHealthPercentage');

  function updateQueenOneHealthPercentage(percentage) {
    queenOneHealthPercentage.textContent = percentage + 'HP';
  }
 
  // Call the update function with the appropriate percentage value
  updateQueenOneHealthPercentage(50); 
}
 
function selectQueenTwo(result) {
  var gameStatus = document.getElementById("queenTwo");
  
  // Check the result and assign the corresponding queen
  if (result === 1 || result === 6 || result === 11 || result === 16) {
    gameStatus.innerHTML = "You are the Oracle Queen";
  } else if (result === 2 || result === 7 || result === 12 || result === 17) {
    gameStatus.innerHTML = "You are the Warrior Queen";
  } else if (result === 3 || result === 8 || result === 13 || result === 18) {
    gameStatus.innerHTML = "You are the Druid Queen";
  } else if (result === 4 || result === 9 || result === 14 || result === 19) {
    gameStatus.innerHTML = "You are the Elemental Queen";
  } else if (result === 5 || result === 10 || result === 15 || result === 20) {
    gameStatus.innerHTML = "You are the Poisoner Queen";
  }

  // Update the health percentage for Queen #2
  const queenTwoHealthPercentage = document.getElementById('queenTwoHealthPercentage');

  function updateQueenTwoHealthPercentage(percentage) {
    queenTwoHealthPercentage.textContent = percentage + 'HP';
  }

  // Call the update function with the appropriate percentage value
  updateQueenTwoHealthPercentage(50);
}

function selectQueenThree(result) {
  var gameStatus = document.getElementById("queenThree");
  
  // Check the result and assign the corresponding queen
  if (result === 1 || result === 6 || result === 11 || result === 16) {
    gameStatus.innerHTML = "You are the Oracle Queen";
  } else if (result === 2 || result === 7 || result === 12 || result === 17) {
    gameStatus.innerHTML = "You are the Warrior Queen";
  } else if (result === 3 || result === 8 || result === 13 || result === 18) {
    gameStatus.innerHTML = "You are the Druid Queen";
  } else if (result === 4 || result === 9 || result === 14 || result === 19) {
    gameStatus.innerHTML = "You are the Elemental Queen";
  } else if (result === 5 || result === 10 || result === 15 || result === 20) {
    gameStatus.innerHTML = "You are the Poisoner Queen";
  }

  // Update the health percentage for Queen #3
  const queenThreeHealthPercentage = document.getElementById('queenThreeHealthPercentage');

  function updateQueenThreeHealthPercentage(percentage) {
    queenThreeHealthPercentage.textContent = percentage + 'HP';
  }

  // Call the update function with the appropriate percentage value
  updateQueenThreeHealthPercentage(50);
}

function selectQueenFour(result) {
  var gameStatus = document.getElementById("queenFour");
  
  // Check the result and assign the corresponding queen
  if (result === 1 || result === 6 || result === 11 || result === 16) {
    gameStatus.innerHTML = "You are the Oracle Queen";
  } else if (result === 2 || result === 7 || result === 12 || result === 17) {
    gameStatus.innerHTML = "You are the Warrior Queen";
  } else if (result === 3 || result === 8 || result === 13 || result === 18) {
    gameStatus.innerHTML = "You are the Druid Queen";
  } else if (result === 4 || result === 9 || result === 14 || result === 19) {
    gameStatus.innerHTML = "You are the Elemental Queen";
  } else if (result === 5 || result === 10 || result === 15 || result === 20) {
    gameStatus.innerHTML = "You are the Poisoner Queen";
  }

  // Update the health percentage for Queen #4
  const queenFourHealthPercentage = document.getElementById('queenFourHealthPercentage');

  function updateQueenFourHealthPercentage(percentage) {
    queenFourHealthPercentage.textContent = percentage + 'HP';
  }

  // Call the update function with the appropriate percentage value
  updateQueenFourHealthPercentage(50);
}
 
function selectQueenFive(result) {
  var gameStatus = document.getElementById("queenFive");
  
  // Check the result and assign the corresponding queen
  if (result === 1 || result === 6 || result === 11 || result === 16) {
    gameStatus.innerHTML = "You are the Oracle Queen";
  } else if (result === 2 || result === 7 || result === 12 || result === 17) {
    gameStatus.innerHTML = "You are the Warrior Queen";
  } else if (result === 3 || result === 8 || result === 13 || result === 18) {
    gameStatus.innerHTML = "You are the Druid Queen";
  } else if (result === 4 || result === 9 || result === 14 || result === 19) {
    gameStatus.innerHTML = "You are the Elemental Queen";
  } else if (result === 5 || result === 10 || result === 15 || result === 20) {
    gameStatus.innerHTML = "You are the Poisoner Queen";
  }

  // Update the health percentage for Queen #5
  const queenFiveHealthPercentage = document.getElementById('queenFiveHealthPercentage');

  function updateQueenFiveHealthPercentage(percentage) {
    queenFiveHealthPercentage.textContent = percentage + 'HP';
  }

  // Call the update function with the appropriate percentage value
  updateQueenFiveHealthPercentage(50);
}

// Restart Game function
function restartGame() {
  // Reset the counters and game statuses
  d20Count = 0;
  gameStatuses = [];
 
  // Clear the queen selection outputs
  document.getElementById("queenOne").innerHTML = "Roll D20 (1x) to Select Queen #1";
  document.getElementById("queenTwo").innerHTML = "Roll D20 (2x) to Select Queen #2";
  document.getElementById("queenThree").innerHTML = "Roll D20 (3x) to Select Queen #3";
  document.getElementById("queenFour").innerHTML = "Roll D20 (4x) to Select Queen #4";
  document.getElementById("queenFive").innerHTML = "Roll D20 (5x) to Select Queen #5";

  // Clear the dice results
  document.getElementById("d20Result").innerHTML = "";
  document.getElementById("d12Result").innerHTML = "";
  document.getElementById("d10Result").innerHTML = "";
  document.getElementById("d8Result").innerHTML = "";
  document.getElementById("d6Result").innerHTML = "";
  document.getElementById("d4Result").innerHTML = "";

  // Hide the restart button and disable the continue button
  document.getElementById("restartButton").style.display = "none";
  document.getElementById("continueButton").disabled = true;
  // Disable the d12 button
  document.getElementById("d12").disabled = true;
}

// Continue Game function
function continueGame() {
  // Enable the d12 button
  document.getElementById("d12").disabled = false;
}

//--- D12 ---//
function rollD12() {
  var d12Result = document.getElementById("d12Result");
  var d12 = Math.floor(Math.random() * 12 + 1);
  d12Result.innerHTML = d12;
};

//--- D10 ---//
function rollD10() {
  var d10Result = document.getElementById("d10Result");
  var d10 = Math.floor(Math.random() * 10 + 1);
  d10Result.innerHTML = d10;
};

//--- D8 ---//
function rollD8() {
  var d8Result = document.getElementById("d8Result");
  var d8 = Math.floor(Math.random() * 8 + 1);
  d8Result.innerHTML = d8;
};

//--- D6 ---//
function rollD6() {
  var d6Result = document.getElementById("d6Result");
  var d6 = Math.floor(Math.random() * 6 + 1);
  d6Result.innerHTML = d6;
};

//--- D4 ---//
function rollD4() {
  var d4Result = document.getElementById("d4Result");
  var d4 = Math.floor(Math.random() * 4 + 1);
  d4Result.innerHTML = d4;
};


//--- To Do List ---//

// turn .healthBar green if updateQueenOneHealthPercentage() is greater than or equal to 35
// turn .healthBar yellow if updateQueenOneHealthPercentage() is greater than 20 and less than 35
// turn .healthBar red if updateQueenOneHealthPercentage() is greater than 1 and less than 20 
// turn .healthBar black if updateQueenOneHealthPercentage() is equal to 0
// if .healthBar black make gameStatus.innerHTML = "Queen Is Dead"; and disable the dead queen and her buttons
// disable a dead queen

// make D12 activate FIGHT, DEFEND, HEAL Buttons
// add a hp shaking motion when attacked
// give each queen type their own dice type & abilities

// determine TRUE queen winner


// Done == Restart Button
// Done == Continue Button
// Done == Continue makes D12 activate
// Done == Disable Buttons 
// Done == Add A 50 point Health Bar
// Done == Add Background