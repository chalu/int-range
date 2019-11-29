
import {intRange, odd} from './int-range.js';

const displayRange = (ints) => {
    const list = document.querySelector('#list');
    list.innerHTML = '';

    ints.forEach(int => {
        const listIten = document.createElement('li');
        listIten.textContent = int;
        list.appendChild(listIten);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const range = intRange({
        start: 1,
        limit: 20,
        steps: odd(2)
    });

    displayRange(range);
});
