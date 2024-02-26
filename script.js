function getRandomNumber() {
  fetch('https://your-azure-function-url/get_random_nhttps://serverdice.azurewebsites.net/get_random_numberumber')
      .then(response => {
          if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
      })
      .then(data => {
          document.getElementById('randomNumber').innerHTML = `Random Number: ${data.random_number}`;
      })
      .catch(error => {
          console.error('Error fetching random number:', error);
      });
}