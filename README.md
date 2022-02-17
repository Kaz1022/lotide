# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kaz1022/lotide`

**Require it:**

`const _ = require('@kaz1022/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: Checking to see if your array output and the expected array output is the same.
* `assertEqual(actual, expected)`: Checking to see if your actual output and the expected output is the same.
* `assertObjectsEqual(actual, expected)`: Checking to see if your actual object output and the expected output is the same.
* `eqObjects(object1, object2)`: Checking to see if object1 and object2 is the same.
* `eqArrays(arrayOne, arrayTwo)`: Checking to see if arrayOne and arrayTwo is the same.
* `countLetters(strings)`:The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `countOnly(strings)`:The function will be given an array and an object. It will return an object containing counts of everything that the input object listed.
* `findKeys(objects, callback)`:The function takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
* `findKeyByValue(anObj, value)`:The function takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
* `flatten(array)`:The function takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
* `letterPositions(sentence)`:The function will return all the indices (zero-based positions) in the string where each character is found.
* `head(array)`:The function returns the first item in the array.
* `tail(array)`:The function returns the "tail" of an array: everything except for the first item (head) of the provided array.
* `middle(array)`:The function takes in an array and return the middle-most element(s) of the given array.
* `map(array)`:The function takes in two arguments: An array to map, A callback function. The map function will return a new array based on the results of the callback function.
* `takeUntil(array, callback)`:This function will keep collecting items from a provided array until the callback provided returns a truthy value.
* `without(source, itemsToRemove)`:This function will return a subset of a given array, removing unwanted elements. It returns a new array with only those elements from source that are not present in the itemsToRemove array.








