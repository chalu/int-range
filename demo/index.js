import { html, render } from "lit-html";

import { intRange, even, odd, multiples } from "../src/int-range.js";
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

const displaySamples = () => {
  let range = [];
  const basicRanges = [];

  range = intRange({
    start: 1,
    limit: 5
  });
  basicRanges.push(range);

  range = intRange({
    start: 1,
    limit: 15,
    sequence: 3
  });
  basicRanges.push(range);

  range = intRange({
    start: 25,
    limit: 1,
    sequence: 5
  });
  basicRanges.push(range);

  const otherRanges = [];

  range = intRange({
    start: 2,
    limit: 20,
    sequence: even({ steps: 2 })
  });
  otherRanges.push(range);

  range = intRange({
    start: 1,
    limit: 20,
    sequence: odd({ steps: 2 })
  });
  otherRanges.push(range);

  range = intRange({
    start: 1,
    limit: 35,
    sequence: multiples({of: 5, steps: 2 })
  });
  otherRanges.push(range);

  range = intRange({
    start: 1980,
    limit: 2020,
    sequence: leapYear({ steps: 2 })
  });
  otherRanges.push(range);

  let slots = document.querySelectorAll(".sample.basic details div");
  basicRanges.forEach((ints, index) => {
    render(listTemplate(ints), slots[index]);
  });

  slots = document.querySelectorAll(".sample.advanced details div");
  otherRanges.forEach((ints, index) => {
    render(listTemplate(ints), slots[index]);
  });
};

document.addEventListener("DOMContentLoaded", displaySamples);
