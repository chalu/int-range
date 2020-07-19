const incrementBy = (steps) => (value) => value + steps;
const decrementBy = (steps) => (value) => value - steps;
const updateByOne = ({ isIncrement }) =>
  isIncrement ? incrementBy(1) : decrementBy(1);

const incrementUpTo = (limit) => (value) => value <= limit;
const decrementUpTo = (limit) => (value) => value >= limit;

const getUpdateStrategy = (options) => {
  const { from = 0, till = 20, stepsOf = 1, sequence } = options;
  const strategy = {};

  const isIncrement = from < till;
  strategy.isIncrement = isIncrement;

  strategy.next =
    isIncrement === true ? incrementBy(stepsOf) : decrementBy(stepsOf);

  if (sequence && typeof sequence === "function") {
    strategy.next = sequence(updateByOne({ isIncrement }));
  }

  strategy.hasNext =
    isIncrement === true ? incrementUpTo(till) : decrementUpTo(till);

  return strategy;
};

export const ints = (options = {}) => {
  const range = [];
  const { next, hasNext, isIncrement } = getUpdateStrategy(options);

  const getEvalOffsetInt = updateByOne({ isIncrement: !isIncrement });
  const evalOffsetInt = getEvalOffsetInt(options.from);
  let value = next(evalOffsetInt);
  while (hasNext(value)) {
    range.push(value);
    value = next(value);
  }

  return range;
};

const nextFnFactory = (opts, updateValue) => {
  const { stepsOf = 1, validator = () => false } = opts;
  const getNext = (value) => {
    let matches = 0;
    let nextValue = value;

    while (matches < stepsOf) {
      nextValue = updateValue(nextValue);
      if (validator(nextValue)) matches += 1;
    }

    return nextValue;
  };

  return getNext;
};

export const sequencer = (opts = {}) => {
  const intSequence = (updateValueByOne) =>
    nextFnFactory(opts, updateValueByOne);
  return intSequence;
};

export const even = (opts = {}) => {
  opts.validator = (num) => num % 2 === 0;
  return sequencer(opts);
};

export const odd = (opts = {}) => {
  opts.validator = (num) => num % 2 !== 0;
  return sequencer(opts);
};

export const multiples = (opts = {}) => {
  opts.validator = (num) => num % opts.of === 0;
  return sequencer(opts);
};

export const prime = (opts = {}) => {
  const isPrime = (num) => {
    for (let i = 2, numSqrt = Math.sqrt(num); i <= numSqrt; i++)
      if (num % i === 0) return false;

    return num >= 1;
  };

  opts.validator = isPrime;
  return sequencer(opts);
};
