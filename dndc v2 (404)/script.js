//--- D20 ---//
var d20Count = 0; // Counter for D20 rolls

function rollD20() {
  var d20Result = document.getElementById("d20Result");
  var d20 = Math.floor(Math.random() * 20 + 1);
  d20Result.innerHTML = d20;

  // Increment the counter
  d20Count++; 

  // Check if five rolls have been made
  if (d20Count === 1) {
    // Disable all the buttons after five rolls
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    
    // Perform the queen selection
    selectQueen(d20); // select queen # 1 through 5 ??
  }
};

// Queen Selection logic
function selectQueen(result) {
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
}

function selectQueen(result) {
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
}

function selectQueen(result) {
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
}

function selectQueen(result) {
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
}
 
function selectQueen(result) {
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


