var button = document.querySelector('#randomizer');
var paragraph = document.querySelector('#result');
if (button) {
    button.addEventListener('click', function () {
        var result = Math.floor(Math.random() * 100);
        if (paragraph) {
            paragraph.textContent = "Your drawn number is: ".concat(result);
        }
    });
}
else {
    console.error('Button element not found');
}
