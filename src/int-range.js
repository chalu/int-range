const incrementBy = (steps) => (value) => value + steps; 
const decrementBy = (steps) => (value) => value - steps;  

const incrementUpTo = (limit) => (value) => value <= limit;
const decrementUpTo = (limit) =>  (value) => value >= limit;

const getUpdateStrategy = (start, limit, steps) => {
  const strategy = {};
  const isIncrement = start < limit;


  strategy.next = isIncrement === true ? incrementBy(steps) : decrementBy(steps);
  strategy.hasNext = isIncrement === true ? incrementUpTo(limit) : decrementUpTo(limit);

  if(typeof steps === 'function') {
    // strategy.next = 
  }

  return strategy;

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