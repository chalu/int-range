
import { intRange } from '../src/int-range.js';
import { leapYear } from '../src/plugins/leap-year.js';

const displayRange = (ints) => {
    const list = document.querySelector('#list');
    list.innerHTML = '';

    ints.forEach(int => {
        const listIten = document.createElement('li');
        listIten.textContent = int;
        list.appendChild(listIten);
    });
};

const runSamples = () => {
    // const range = intRange({
    //     start: 1980,
    //     limit: 2020,
    //     sequence: leapYear({steps: 2})
    // });
    // displayRange(range);
}

document.addEventListener('DOMContentLoaded', runSamples);
