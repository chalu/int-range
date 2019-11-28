const getUpdateStrategy = (start, limit, steps) => {

  const isIncrement = start < limit;

  const increment = (value) => value + steps; 
  const decrement = (value) => value - steps;  

  const canIncrement = (value) => value <= limit;
  const canDecrement = (value) => value >= limit;

  const hasNext = isIncrement === true ? canIncrement : canDecrement;
  const next = isIncrement === true ? increment : decrement;

  return {next, hasNext};

};

const intRange = (options = {}) => {
    const { start = 0, limit = 20, steps = 1 } = options;

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
