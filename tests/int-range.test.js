import { ints } from "../src/int-range.js";

describe('can generate basic integer sequencies', () => {

    test('can generate single spaced integers, in increments', () => {
        const range = ints({
            from: 1, till: 10
        });

        expect(range.length).toBe(10);

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(range).toEqual(expect.arrayContaining(expected));
    });
    
});