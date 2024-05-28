const button: HTMLButtonElement | null = document.querySelector('#randomizer');
const paragraph: HTMLParagraphElement | null = document.querySelector('#result');

if (button) {
    button.addEventListener('click', () => {
    const result: number = Math.floor(Math.random() * 100);
if (paragraph) {
    paragraph.textContent = `Your drawn number is: ${result}`
}
})
} else {
    console.error('Button element not found')
}