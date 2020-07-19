import { ints, even } from "../src/int-range.js";
import { leapYear } from "../src/plugins/leap-year.js";

describe("generates basic integer sequencies", () => {
  test("can generate single spaced integers, in increments", () => {
    const range = ints({
      from: 1,
      till: 10
    });

    expect(range.length).toBe(10);

    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(range).toEqual(expect.arrayContaining(expected));
  });

  test("can generate single spaced integers, in decrements", () => {
    const range = ints({
      from: 10,
      till: 1
    });

    expect(range.length).toBe(10);

    const expected = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(range).toEqual(expect.arrayContaining(expected));
  });

  test("can generate custom spaced integers, in increments", () => {
    const range = ints({
      from: 1,
      till: 30,
      stepsOf: 3
    });

    expect(range.length).toBe(10);

    const expected = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
    expect(range).toEqual(expect.arrayContaining(expected));
  });

  test("can generate custom spaced integers, in decrements", () => {
    const range = ints({
      from: 30,
      till: 1,
      stepsOf: 3
    });

    expect(range.length).toBe(10);

    const expected = [28, 25, 22, 19, 16, 13, 10, 7, 4, 1];
    expect(range).toEqual(expect.arrayContaining(expected));
  });
});

describe("generates advanced integer sequencies", () => {
  describe("generates even numbers", () => {
    test("can generate single spaced even integers, in increments", () => {
      const range = ints({
        from: 2,
        till: 20,
        sequence: even()
      });
      expect(range.length).toBe(10);

      const expected = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
      expect(range).toEqual(expect.arrayContaining(expected));
    });

    test("can generate single spaced even integers, in decrements", () => {
      const range = ints({
        from: 20,
        till: 1,
        sequence: even()
      });

      expect(range.length).toBe(10);

      const expected = [20, 18, 16, 14, 12, 10, 8, 6, 4, 2];
      expect(range).toEqual(expect.arrayContaining(expected));
    });

    test("can generate custom spaced even integers, in increments & decrements", () => {
      let range = ints({
        from: 2,
        till: 30,
        sequence: even({ stepsOf: 3 })
      });
      expect(range.length).toBe(5);
      let expected = [6, 12, 18, 24, 30];
      expect(range).toEqual(expect.arrayContaining(expected));

      range = ints({
        from: 50,
        till: 2,
        sequence: even({ stepsOf: 5 })
      });
      expect(range.length).toBe(5);
      expected = [42, 32, 22, 12, 2];
      expect(range).toEqual(expect.arrayContaining(expected));
    });
  });
});

describe("can generate custom integer sequencies", () => {
  test("can generate a series of leap years", () => {
    const range = ints({
      from: 1980,
      till: 2020,
      sequence: leapYear()
    });
    expect(range.length).toBe(11);

    const expected = [
      1980,
      1984,
      1988,
      1992,
      1996,
      2000,
      2004,
      2008,
      2012,
      2016,
      2020
    ];
    expect(range).toEqual(expect.arrayContaining(expected));
  });

  test("can generate a series of leap years in decrements", () => {
    const range = ints({
      from: 2020,
      till: 1980,
      sequence: leapYear()
    });
    expect(range.length).toBe(11);

    const expected = [
      2020,
      2016,
      2012,
      2008,
      2004,
      2000,
      1996,
      1992,
      1988,
      1984,
      1980
    ];
    expect(range).toEqual(expect.arrayContaining(expected));
  });

  test("can generate a series of custom spaced leap years", () => {
    const range = ints({
      from: 1970,
      till: 2020,
      sequence: leapYear({ stepsOf: 2 })
    });
    expect(range.length).toBe(6);

    const expected = [1976, 1984, 1992, 2000, 2008, 2016];
    expect(range).toEqual(expect.arrayContaining(expected));
  });
});
