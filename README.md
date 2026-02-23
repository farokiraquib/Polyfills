# Custom JavaScript Array Polyfills 🛠️

A collection of custom-built JavaScript array methods created from scratch to understand the inner workings of the JS engine, the `this` keyword, and prototype chaining.

##  The Polyfills

This repository contains three core array methods, reverse-engineered and rewritten with custom logic:

* **`mānacitram()`** - A custom polyfill for `Array.prototype.map()`. Transforms elements in an array.
* **`pureit()`** - A custom polyfill for `Array.prototype.filter()`. Filters elements based on a true/false condition.
* **`sapat()`** - A custom recursive polyfill for `Array.prototype.flat()`. Flattens deeply nested arrays using a custom depth timer.

##  How to use

Just copy the polyfill functions into your project, and they will automatically attach to the global `Array.prototype`.
