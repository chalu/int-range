const incrementBy = steps => value => value + steps;
const decrementBy = steps => value => value - steps;
const updateByOne = isIncrement =>
  isIncrement ? incrementBy(1) : decrementBy(1);

const incrementUpTo = limit => value => value <= limit;
const decrementUpTo = limit => value => value >= limit;

const isEven = num => num % 2 === 0;
const isOdd = num => num % 2 !== 0;

const getUpdateStrategy = (start, limit, sequence) => {
  const strategy = {};
  const isIncrement = start < limit;

  strategy.next =
    isIncrement === true ? incrementBy(sequence) : decrementBy(sequence);
  strategy.hasNext =
    isIncrement === true ? incrementUpTo(limit) : decrementUpTo(limit);

  if (typeof sequence === "function") {
    strategy.next = sequence(updateByOne(isIncrement));
  }

  return strategy;
};

export const intRange = (options = {}) => {
  const { start = 0, limit = 20, sequence = 1 } = options;

  const range = [];
  const { next, hasNext } = getUpdateStrategy(start, limit, sequence);

  let value = start;
  while (hasNext(value)) {
    range.push(value);
    value = next(value);
  }

  return range;
};

const nextFnFactory = (opts, updateValue) => {
  const { steps = 1, validator = () => false } = opts;
  const getNext = value => {
    let matches = 0;
    let nextValue = value;

    while (matches < steps) {
      nextValue = updateValue(nextValue);
      if (validator(nextValue)) matches += 1;
    }

    return nextValue;
  };

  return getNext;
};

export const sequencer = (opts = {}) => {
  const intSequence = updateValueByOne => nextFnFactory(opts, updateValueByOne);
  return intSequence;
};

export const even = (opts = {}) => {
  opts.validator = isEven;
  return sequencer(opts);
};

export const odd = (opts = {}) => {
  opts.validator = isOdd;
  return sequencer(opts);
};

export const multiples = (opts = {}) => {
  const { of = 2 } = opts;
  opts.validator = num => num % of === 0;
  return sequencer(opts);
};
