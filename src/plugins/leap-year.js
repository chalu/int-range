import { sequencer } from "../int-range.js";

export const leapYear = (opts = {}) => {
  const isLeapYear = year => {
    if (year % 4 === 0) return true;

    if (year % 100 === 0 && year % 400 === 0) return true;

    return false;
  };
  opts.validator = isLeapYear;

  return sequencer(opts);
};
