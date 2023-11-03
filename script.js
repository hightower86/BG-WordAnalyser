const textareaEl = document.querySelector('.textarea');
const statNumberWordsEl = document.querySelector('.stat__number--words');
const statNumberCharactersEl = document.querySelector(
    '.stat__number--characters'
);
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const twitterNumberEl = document.querySelector('.stat__number--twitter');

const inputHandler = () => {
    // example of input validation
    if (textareaEl.value.includes('<script>')) {
        textareaEl.value = textareaEl.value.replace('<script>', '');
        alert('No scripts allowed!');
    }

    // determine new numbers
    const charQty = textareaEl.value.length;

    // count words
    const text = textareaEl.value;
    const words = text.split(' ');
    const wordsCount = words.filter((word) => word !== '').length;

    // indicate exceeded limits
    if (charQty > 280) {
        twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    if (charQty > 2200) {
        facebookNumberEl.classList.add('stat__number--limit');
    }
    if (charQty <= 2200) {
        facebookNumberEl.classList.remove('stat__number--limit');
    }

    // set new numbers
    statNumberWordsEl.textContent = wordsCount;
    statNumberCharactersEl.textContent = charQty;
    facebookNumberEl.textContent = 2200 - charQty;
    twitterNumberEl.textContent = 280 - charQty;
};

textareaEl.addEventListener('input', inputHandler);
