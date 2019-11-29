const incrementBy = (steps) => (value) => value + steps; 
const decrementBy = (steps) => (value) => value - steps;  

const incrementUoTo = (limit) => (value) => value <= limit;
const decrementUpTo = (limit) =>  (value) => value >= limit;

const getUpdateStrategy = (start, limit, steps) => {
  const strategy = {};
  const isIncrement = start < limit;


  strategy.next = isIncrement === true ? incrementBy(steps) : decrementBy(steps);
  strategy.hasNext = isIncrement === true ? incrementUoTo(limit) : decrementUpTo(limit);

  return strategy;

};


export const even = (gait = 1) => (updateValueByOne) => {

  const isEven = (int) => int % 2 === 0;

  return (value) => {

    const matches = 0;
    let nextValue = value;
    
    while( matches < gait ) {
       nextValue = updateValueByOne(nextValue);

      if(isEven(nextValue)) matches += 1;
    }

    return nextValue;

  };

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

export default intRange;