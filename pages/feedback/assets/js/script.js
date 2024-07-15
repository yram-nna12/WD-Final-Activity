document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch('https://script.google.com/macros/s/AKfycbwP-H5272wkDMeEYphPIM_fZeKUQGJrpl4k03H8nBE5LBoeIJvpln1xoEschnFoUf0oTA/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        alert('Thank You for your feedback!');
        event.target.reset(); 
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting feedback. Please try again.');
    });
});