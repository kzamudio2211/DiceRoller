function getRandomNumber() {
  fetch('https://serverdice.azurewebsites.net/get_random_number')
      document.getElementById('randomNumber').innerHTML = `You rolled a: ${data.random_number}`;
}