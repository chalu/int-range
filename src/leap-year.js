export const leapYear = (opts = {}) => (updateValueByOne) => {

    const { steps = 1 } = opts;
    const isLeapYear = (year) => {
        if (year % 4 === 0) return true;

        if ((year % 100 === 0) && (year % 400 === 0)) return true;
    };

    return function getLeapYear(value) {

        let matches = 0;
        let nextValue = value;

        while (matches < steps) {
            nextValue = updateValueByOne(nextValue);
            if (isLeapYear(nextValue)) matches += 1;
        }

        return nextValue;
    }

};