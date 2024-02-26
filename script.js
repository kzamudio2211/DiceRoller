function getRandomNumber() {
  fetch('https://serverdice.azurewebsites.net/get_random_number')
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