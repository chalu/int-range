
const intRange = (options = {}) => {
    const { start = 0, limit = 20, steps = 1 } = options;

    const range = [];

    for (let counter = start; counter <= limit; counter += steps) {
        range.push(counter);
    }

    return range;
};

export default intRange;
