<img src="./demo/ints.png">

:sparkles: :sparkles: An extensible 1.5KB JavaScript utility for generating integers :zap: :muscle: :fire:

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d9e9f0f2f0134e538327a072606dec71)](https://www.codacy.com/manual/chalu/int-range?utm_source=github.com&utm_medium=referral&utm_content=chalu/int-range&utm_campaign=Badge_Grade) [![Codacy Badge](https://api.codacy.com/project/badge/Coverage/d9e9f0f2f0134e538327a072606dec71)](https://www.codacy.com/manual/chalu/int-range?utm_source=github.com&utm_medium=referral&utm_content=chalu/int-range&utm_campaign=Badge_Coverage)

## About

A simple Javascript utility that can generate a range of integers, from simple ranges like even and odd numbers, to multiples of a given number, all with configurable spacing between the number sequencies.

You can also easily extend the utility to generate special custom sequencies for your unique needs. See the bundled `leap-year` plugin for sample extension plugin

## Why

This utility can be used anyhow you deem fit, but the codebase and repository exists mostly for demonstration and educational purposes. The goal is to show how this could be built, and maybe walk through the procees of doing so (with a youtube playlist :smirk:) while highlighting some best practices. If you feel this should become an NPM package, let me know [on Twitter](https://twitter.com/chaluwa)

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

3.  View the examples by running any of the following commands and opening the displayed URL in a browser

    ```console
    npm run demo
    ```

    ```console
    yarn demo
    ```

## Examples

See [this demo](https://chalu.github.io/int-range/index.html) from [the docs folder](https://github.com/chalu/int-range/tree/master/docs) for more usage samples

1.  Generate 1 to 5

    ```javascript
    ints({ from: 1, till: 5 });
    ```

2.  Generate 0 to 15, in steps of 3

    ```javascript
    ints({ from: 0, till: 15, stepsOf: 3 });
    // output: 0, 3, 6, 9, 12, 15
    ```

3.  Generate integers between 25 and 1, in descending order, each integer spaced out by 5

    ```javascript
    ints({ from: 25, till: 1, stepsOf: 5 });
    // output: 25, 20, 15, 10, 5
    ```

4.  Generate a sequence of _every other multiple of 5_ between 1 and 50
    ```javascript
    ints({
      from: 1,
      till: 35,
      sequence: multiples({ of: 5, stepsOf: 2 }),
      // output: 1, 10, 20, 30
    });
    ```

## BYOS

> Bring Your Own Sequence (BYOS), a.k.a extensibility!

Have need for a custom or domain specific integer sequence? You simply need to make a _validator function_!

1.  Import the util's _sequencer_ engine

    ```javascript
    import { sequencer } from "../int-range.js";
    ```

2.  Declare and export your custom range function. It will be called with an object parameter

    ```javascript
    export const myCustomIntRange = (opts = {}) => {};
    ```

3.  Define a validator function. It should return `true` when its `value` parameter _is a_ bonafide integer in your custom sequence. This validator function should be set as the `validator` property of the object parameter passsed to your custom range function

    ```javascript
    export const myCustomIntRange = (opts = {}) => {
      opts.validator = (value) => {
        // determine if value meets the requirement
        // for members of your custom range,
        // then return true, otherwise return false.
      };
    };
    ```

4.  Call the sequencer function with your input parameter and return the outcome. Your complete integer sequence extension should look like:

    ```javascript
    import { sequencer } from "../int-range.js";

    export const myCustomIntRange = (opts = {}) => {
        opts.validator = (value) => {
            if(/* value meets member requirements */) return true;

            return false;
        }

        return sequencer(opts);
    }
    ```

5.  Finally, use `myCustomIntRange` to generate your desired sequence of integers

    ```javascript
    import { ints } from "../int-range.js";
    import { myCustomIntRange } from "./path/to/my-custom-int-range.js";

    const numbers = ints({
      from: 5,
      till: 200,
      sequence: myCustomIntRange({ stepsOf: 2 }),
    });

    console.log(numbers);
    ```

Take a look at the [leap year sample](https://github.com/chalu/int-range/blob/master/src/plugins/leap-year.js) and see how super easy it is to extend int-range.js to sequence custom domain specific integer ranges.

## LICENSE

MIT
