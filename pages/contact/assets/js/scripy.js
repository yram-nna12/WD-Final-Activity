const form = document.getElementById('contactForm');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            if (!validateForm()) {
                return;
            }

            submitForm();
        });

        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const message = document.getElementById('message').value.trim();
            const email = document.getElementById('email').value.trim();
            const purpose = document.getElementById('purpose').value.trim();

            if (name === '' || message === '' || email === '' || purpose === '') {
                alert('Please fill out all fields.');
                return false;
            }

            return true;
        }

        function submitForm() {
            const xhr = new XMLHttpRequest();
            const url = 'https://script.google.com/macros/s/AKfycbyQlV_OwD5kfh2R4Ql1S7pFkY1JsSfO4WTAZO8YkeF60pIjG0MamcAQlkbty5FHDTGhzw/exec';
            const formData = new FormData(form);

            xhr.open('POST', url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    alert('Form submitted successfully!');
                    form.reset(); // Clear the form after successful submission
                } else {
                    alert('Failed to submit form. Please try again later.');
                }
            };
            xhr.onerror = function() {
                alert('Failed to submit form. Please try again later.');
            };
            xhr.send(new URLSearchParams(formData));
        }