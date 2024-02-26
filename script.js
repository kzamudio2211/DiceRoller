async function getRandomNumber() {
  try {
      const response = await fetch('https://serverdice.azurewebsites.net/get_random_number');
      const data = await response.json();
      document.getElementById('randomNumber').innerHTML = `You rolled a: ${data.random_number}`;
  } catch (error) {
      console.error('Error fetching random number:', error);
  }
}