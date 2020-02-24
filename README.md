[![Maintainability](https://api.codeclimate.com/v1/badges/4a014530ed6dc1c4331d/maintainability)](https://codeclimate.com/github/chalu/int-range/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/4a014530ed6dc1c4331d/test_coverage)](https://codeclimate.com/github/chalu/int-range/test_coverage)

# int-range

A simple Javascript utility that can generate a range of integers, from simple ranges like even and odd numbers, to multiples of a given number, all with configurable spacing between the number sequencies.

You can also easily extend the utility to generate special custom sequencies for your unique needs. E.g the sequence of leap years between 1980 and 2020!

### Why

This codebase and repository exists mostly for demonstration and educational purposes. The goal is to show users how this could be built, and also walk through the procees of doing so, while highlighting some best practices we applied and decisions we made along the way. 

The free and somewhat obsolete CodeWalk tutorial is available at http://bit.ly/int-range-codewalk

### Usage

1. To get started, clone this repository to your local machine and go into the int-range directory

    ```
    git clone https://github.com/chalu/int-range.git
    cd int-range
    ```

2. Install all dependencies to complete the setup. Use NPM or Yarn depending on what you already have setup on your machine.

    ```
    npm install --save
    ```

    ```
    yarn install
    ```

3. View the samples by running any of the following commands and opening the displayed URL in a browser

    ```
    npm run demo
    ```

    ```
    yarn demo
    ```

### Examples

See [the demo folder](https://github.com/chalu/int-range/tree/master/demo) for more usage samples

> Generate 1 to 5
```
intRange({ start: 1, limit: 5 });
```

> Generate 1 to 15, each integer spaced out by 3
```
intRange({ start: 1, limit: 15, sequence: 3 });
```

> Generate integers between 25 and 1, in descending order, each integer spaced out by 5
```
intRange({ start: 25, limit: 1, sequence: 5 });
```

> Generate every other multiple of 5 between 1 to 35
```
intRange({ 
    start: 1, limit: 35, 
    sequence: multiples({ of: 5, steps: 2 })
});
```