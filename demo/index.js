import { ints, odd, multiples, even, prime } from "../src/int-range.js";
import { leapYear } from "../src/plugins/leap-year.js";

const samples = [
  () => ints({ from: 1, till: 10 }),

  () => ints({ from: 0, till: 15, stepsOf: 3 }),

  () => ints({ from: 25, till: 1, stepsOf: 5 }),

  () =>
    ints({
      from: 1,
      till: 20,
      sequence: even({ stepsOf: 2 }),
    }),

  () =>
    ints({
      from: 1,
      till: 20,
      sequence: odd({ stepsOf: 2 }),
    }),

  () =>
    ints({
      from: 1,
      till: 50,
      sequence: prime({ stepsOf: 2 }),
    }),

  () =>
    ints({
      from: 1,
      till: 35,
      sequence: multiples({ of: 5, stepsOf: 2 }),
    }),

  () =>
    ints({
      from: 1980,
      till: 2020,
      sequence: leapYear({ stepsOf: 2 }),
    }),
];

document.addEventListener("DOMContentLoaded", () => {
  [...document.querySelectorAll("details")].forEach((container) => {
    container.addEventListener("click", ({ target }) => {
      if (target && target.nodeName === "BUTTON") {
        const index = target.dataset.exampleIndex;
        const result = samples[index]();
        container.querySelector("[output]").textContent = result.join(", ");
      }
    });
  });
});
