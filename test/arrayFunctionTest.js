const assert = require("assert");
const arrayFunctions = require("../src/arrayFunctions.js");
const {map,filter} = arrayFunctions;

const increment = function(number){
  return number + 1;
}

const checkAge = function(age){
  return age > 10;
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

