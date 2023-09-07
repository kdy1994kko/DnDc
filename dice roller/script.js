//--- D20 ---//

function rollD20() {
  var d20Result = document.getElementById("d20Result");
  var d20 = Math.floor(Math.random() * 20 + 1);
  d20Result.innerHTML = d20;
};

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