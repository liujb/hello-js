/**
 * typeof总返回"string","number","object","function","boolean","undefined"之一
 */

var msg = 'message';
var obj = {};
var num = 10;
var bool = false;
var undefined1;
var null1 = null;
var function1 = function() {};
var undefinedVar;

console.log("typeof string: " + typeof msg); //'string'
console.log("typeof object: " + typeof obj); //'object'
console.log("typeof number: " + typeof num); //'number'
console.log("typeof of boolean: " + typeof bool); //'boolean'
console.log("typeof undefined: " + typeof undefined1); //'undefined'
console.log("typeof null: " + typeof null1); //'object'
console.log("typeof function: " + typeof function1); //'function'
console.log("typeof nonInstance variables is: " + typeof undefinedVar); //'undefined'