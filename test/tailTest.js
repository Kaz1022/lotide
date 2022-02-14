const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], ["Lighthouse", "Labs"][0]);
assertEqual(result[1], ["Lighthouse", "Labs"][1]);
assertEqual(result.length, 2);