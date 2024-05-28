const button: HTMLButtonElement | null = document.querySelector('#randomizer');
const paragraph: HTMLParagraphElement | null = document.querySelector('#result');

button?.addEventListener('click', () => {
    const result: number = Math.floor(Math.random() * 100);
paragraph && paragraph.textContent = `Your drawn number is: ${result}`
})