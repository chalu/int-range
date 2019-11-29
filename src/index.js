
import {intRange, multiples} from './int-range.js';

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
        limit: 50,
        sequence: multiples({of: 5, steps: 3})
    });

    displayRange(range);
});
