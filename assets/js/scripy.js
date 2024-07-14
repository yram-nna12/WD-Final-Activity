document.getElementById('engageBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    var messageContainer = document.getElementById('messageContainer');
    if (messageContainer.classList.contains('hidden')) {
        messageContainer.classList.remove('hidden');
        setTimeout(function() {
            messageContainer.classList.add('show');
        }, 10);
    } else {
        messageContainer.classList.remove('show');
        setTimeout(function() {
            messageContainer.classList.add('hidden');
        }, 500);
    }
});

document.getElementById('twitterBtn').addEventListener('click', function() {
    var message = encodeURIComponent(document.getElementById('userMessage').value);
    var url = `https://twitter.com/intent/tweet?text=${message}`;
    window.open(url, '_blank');
});

document.getElementById('gmailBtn').addEventListener('click', function() {
    var message = encodeURIComponent(document.getElementById('userMessage').value);
    var url = `mailto:?subject=Hello&body=${message}`;
    window.open(url, '_blank');
});

document.getElementById('messengerBtn').addEventListener('click', function() {
    var message = encodeURIComponent(document.getElementById('userMessage').value);
    var url = `https://www.facebook.com/messages/t/?message=${message}`;
    window.open(url, '_blank');
});
