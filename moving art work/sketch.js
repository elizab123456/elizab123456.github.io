document.addEventListener('DOMContentLoaded', function() {
    const fallingObject = document.getElementById('falling-object');

    fallingObject.addEventListener('mouseover', function() {
        fallingObject.style.top = '500px';
    });
});