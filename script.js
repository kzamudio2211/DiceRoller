async function getRandomNumber() {
  try {
      const response = await fetch('https://serverdice.azurewebsites.net/get_random_number');
      const data = await response.json();
      document.getElementById('randomNumber').innerHTML = `Random Number: ${data.random_number}`;
  } catch (error) {
      console.error('Error fetching random number:', error);
  }
}