const incrementBy = (steps) => (value) => value + steps; 
const decrementBy = (steps) => (value) => value - steps;
const updateByOne = (isIncrement) => isIncrement ? incrementBy(1) : decrementBy(1);  

const incrementUpTo = (limit) => (value) => value <= limit;
const decrementUpTo = (limit) =>  (value) => value >= limit;

const getUpdateStrategy = (start, limit, steps) => {
  const strategy = {};
  const isIncrement = start < limit;

  strategy.next = isIncrement === true ? incrementBy(steps) : decrementBy(steps);
  strategy.hasNext = isIncrement === true ? incrementUpTo(limit) : decrementUpTo(limit);

  if(typeof steps === 'function') {
    strategy.next = steps( updateByOne(isIncrement) );
  }

  return strategy;

};

export const even = (opts = {}) => (updateValueByOne) => {

  const {steps = 1} = opts;
  const isEven = (num) => num % 2 === 0;

  return function getEven (value) {

    let matches = 0;
    let nextValue = value;

    while(matches < steps) {
      nextValue = updateValueByOne(nextValue);
      if( isEven(nextValue) ) matches += 1;
    }

    return nextValue;
  }

};

export const odd = (opts = {}) => (updateValueByOne) => {

  const {steps = 1} = opts;
  const isOdd = (num) => num % 2 !== 0;

  return function getOdd (value) {

    let matches = 0;
    let nextValue = value;

    while(matches < steps) {
      nextValue = updateValueByOne(nextValue);
      if( isOdd(nextValue) ) matches += 1;
    }

    return nextValue;
  }

};

export const intRange = ( options = {} ) => {
  const {start = 0, limit = 20, steps = 1} = options;

  const range = [];
  const {next, hasNext} = getUpdateStrategy(start, limit, steps);

  let value = start;
  while( hasNext(value) ) {
    range.push(value);
    value = next(value);
  }

  return range;
};