function rollDice() {
  
  var result = Math.floor(Math.random() * 6) + 1;
  document.getElementById("result").innerHTML = "You rolled a " + result;
}