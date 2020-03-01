import { html, render } from "lit-html";

import { intRange, odd, multiples } from "../src/int-range.js";
import { leapYear } from "../src/plugins/leap-year.js";

let listTemplate = ints => html`
  <ul>
    ${ints.map(
      int =>
        html`
          <li>${int}</li>
        `
    )}
  </ul>
`;

const basicSamples = () => {
  let range = [];
  const basicRanges = [];

  range = intRange({
    from: 1,
    till: 5
  });
  basicRanges.push(range);

  range = intRange({
    from: 1,
    till: 15,
    stepsOf: 3
  });
  basicRanges.push(range);

  range = intRange({
    from: 25,
    till: 1,
    stepsOf: 5
  });
  basicRanges.push(range);

  let slots = document.querySelectorAll(".sample.basic details div");
  basicRanges.forEach((ints, index) => {
    render(listTemplate(ints), slots[index]);
  });
};

const advancedSamples = () => {
  let range = [];
  const otherRanges = [];

  range = intRange({
    from: 1,
    till: 20,
    sequence: odd({ stepsOf: 2 })
  });
  otherRanges.push(range);

  range = intRange({
    from: 1,
    till: 35,
    sequence: multiples({ of: 5, stepsOf: 2 })
  });
  otherRanges.push(range);

  range = intRange({
    from: 1980,
    till: 2020,
    sequence: leapYear({ stepsOf: 2 })
  });
  otherRanges.push(range);

  let slots = document.querySelectorAll(".sample.advanced details div");
  otherRanges.forEach((ints, index) => {
    render(listTemplate(ints), slots[index]);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  basicSamples();
  advancedSamples();
});
