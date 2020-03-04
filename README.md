[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d9e9f0f2f0134e538327a072606dec71)](https://www.codacy.com/manual/chalu/int-range?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=chalu/int-range&amp;utm_campaign=Badge_Grade)

# int-range

A simple Javascript utility that can generate a range of integers, from simple ranges like even and odd numbers, to multiples of a given number, all with configurable spacing between the number sequencies.

You can also easily extend the utility to generate special custom sequencies for your unique needs. E.g the sequence of leap years between 1980 and 2020!

## Why

This codebase and repository exists mostly for demonstration and educational purposes. The goal is to show users how this could be built, and also walk through the procees of doing so, while highlighting some best practices we applied and decisions we made along the way. 

See [the docs folder](https://chalu.github.io/int-range/index.html) for more usage samples

## Usage

1.  To get started, clone this repository to your local machine and go into the int-range directory

    ```console
    git clone https://github.com/chalu/int-range.git
    cd int-range
    ```

2.  Install all dependencies to complete the setup. Use NPM or Yarn depending on what you already have setup on your machine.

    ```console
    npm install --save
    ```

    ```console
    yarn install
    ```

3.  View the samples by running any of the following commands and opening the displayed URL in a browser

    ```console
    npm run demo
    ```

    ```console
    yarn demo
    ```

## Examples

1.  Generate 1 to 5 

    ```javascript
    ints({ from: 1, till: 5 });
    ```

2.  Generate 1 to 15, each integer spaced out by 3

    ```javascript
    ints({ from: 1, till: 15, stepsOf: 3 });
    ```

3.  Generate integers between 25 and 1, in descending order, each integer spaced out by 5

    ```javascript
    ints({ from: 25, till: 1, stepsOf: 5 });
    ```

4.  Generate every other multiple of 5 between 1 to 35
    ```javascript
    ints({ 
        from: 1, till: 35, 
        sequence: multiples({ of: 5, stepsOf: 2 })
    });
    ```