 document.getElementById('feedbackForm').addEventListener('submit', function(event) {
            event.preventDefault(); 
            const formData = new FormData(event.target);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            fetch(event.target.action, {
                method: 'POST',
                mode: 'no-cors', 
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.ok) {
                    alert('Thank You for your feedback!');
                } else {
                    alert('Error submitting feedback. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error submitting feedback. Please try again.');
            });
        });