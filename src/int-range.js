const incrementBy = steps => value => value + steps;
const decrementBy = steps => value => value - steps;
const updateByOne = isIncrement =>
  isIncrement ? incrementBy(1) : decrementBy(1);

const incrementUpTo = limit => value => value <= limit;
const decrementUpTo = limit => value => value >= limit;

const isEven = num => num % 2 === 0;
const isOdd = num => num % 2 !== 0;

const getUpdateStrategy = (options) => {
  const { from = 0, till = 20, stepsOf = 1, sequence } = options;
  const strategy = {};
  const isIncrement = from < till;

  strategy.next =
    isIncrement === true ? incrementBy(stepsOf) : decrementBy(stepsOf);

  if (sequence && typeof sequence === "function") {
    strategy.next = sequence(updateByOne(isIncrement));
  }

  strategy.hasNext =
    isIncrement === true ? incrementUpTo(till) : decrementUpTo(till);

  return strategy;
};

export const ints = (options = {}) => {
  const range = [];
  const { next, hasNext } = getUpdateStrategy(options);

  let value = options.from;
  while (hasNext(value)) {
    range.push(value);
    value = next(value);
  }

  return range;
};

const nextFnFactory = (opts, updateValue) => {
  const { stepsOf = 1, validator = () => false } = opts;
  const getNext = value => {
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
  opts.validator = num => num % opts.of === 0;
  return sequencer(opts);
};
