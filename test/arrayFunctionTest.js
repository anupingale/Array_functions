const assert = require("assert");
const arrayFunctions = require("../src/arrayFunctions.js");
const {reduce, map, filter} = arrayFunctions;

const increment = function(number){
  return number + 1;
}

const checkAge = function(age){
  return age > 10;
}

const sum = function(number1, number2) {
  return number1+number2;
}

describe('map' , function() {
  describe('increment', function() {
    it('check for null input', function() {
      assert.deepEqual(map([],increment),[]);
    })
    it('check for single value', function() {
      assert.deepEqual(map([0],increment),[1]);
    })
    it('check for multiple values', function() {
      assert.deepEqual(map([1,2],increment),[2,3]);
    })
  })
})

describe('filter', function() {  
  describe('checkAge', function() {
    it('check for null input', function() {
      assert.deepEqual(filter([],checkAge),[]);
    })
    it('check for lesser value', function() {
      assert.deepEqual(filter([1],checkAge),[]);
    })
    it('check with single greater value', function() {
      assert.deepEqual(filter([20],checkAge),[20]);
    })
    it('check with multiple greater values', function() {
      assert.deepEqual(filter([20,30,40],checkAge),[20,30,40]);
    })
    it('check with combination of values', function() {
      assert.deepEqual(filter([1,2,30],checkAge),[30]);
    })
  })
})

describe('reduce', function() {
  describe('sum', function() {
    it('should return sum of 2 numbers', function() {
      assert.deepEqual(reduce([2,3],1,sum),6);
    })
    it('should return sum of multiple numbers in array', function() {
      assert.deepEqual(reduce([1,2,3,4,5,6],1,sum),22);
    })
    it('should return sum of 2 numbers with no initial value', function() {
      assert.deepEqual(reduce([1,2],0,sum),3);
    })
    it('should return sum of multiple numbers', function() {
      assert.deepEqual(reduce([1,2,3,4,5,6],0,sum),21);
    })
  })
})

