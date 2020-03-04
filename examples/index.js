import { html, render } from "lit-html";

import { ints, odd, multiples } from "../src/int-range.js";
import { leapYear } from "../src/plugins/leap-year.js";

let listTemplate = nums => html`
  <ul>
    ${nums.map(
      num =>
        html`
          <li>${num}</li>
        `
    )}
  </ul>
`;

const basicSamples = () => {
  let range = [];
  const basicRanges = [];

  range = ints({
    from: 1,
    till: 5
  });
  basicRanges.push(range);

  range = ints({
    from: 1,
    till: 15,
    stepsOf: 3
  });
  basicRanges.push(range);

  range = ints({
    from: 25,
    till: 1,
    stepsOf: 5
  });
  basicRanges.push(range);

  let slots = document.querySelectorAll(".sample.basic details div");
  basicRanges.forEach((nums, index) => {
    render(listTemplate(nums), slots[index]);
  });
};

const advancedSamples = () => {
  let range = [];
  const otherRanges = [];

  range = ints({
    from: 1,
    till: 20,
    sequence: odd({ stepsOf: 2 })
  });
  otherRanges.push(range);

  range = ints({
    from: 1,
    till: 35,
    sequence: multiples({ of: 5, stepsOf: 2 })
  });
  otherRanges.push(range);

  range = ints({
    from: 1980,
    till: 2020,
    sequence: leapYear({ stepsOf: 2 })
  });
  otherRanges.push(range);

  let slots = document.querySelectorAll(".sample.advanced details div");
  otherRanges.forEach((nums, index) => {
    render(listTemplate(nums), slots[index]);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  basicSamples();
  advancedSamples();
});
