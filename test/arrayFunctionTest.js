const assert = require("assert");
const arrayFunctions = require("../src/arrayFunctions.js");
const {reduce, map, filter} = arrayFunctions;

const truthy = function (number) {
  return true;
}

const falsy = function (number) {
  return false;
}

const increment = function(number){
  return number + 1;
}

const decrement = function(number) {
  return number - 1;
}

const checkAge = function(age){
  return age > 10;
}

const sum = function(number1, number2) {
  return number1 + number2;
}

describe('map', function() {
  it('should return empty array when input is empty array', function() {
    assert.deepEqual(map(increment,[]),[]);
  });

  it('should preserve the length of array', function() {
    const numbers = [1,2];
    assert.equal(map(increment, numbers).length, numbers.length);
  });

  it('should transform result as per mapper function', function() {
    assert.deepEqual(map(decrement,[0]),[-1]);
    assert.deepEqual(map(increment,[1,2]),[2,3]);
  });
});

describe('filter', function() {  
  it('should return empty array when input is empty array', function() {
    assert.deepEqual(filter(checkAge,[]),[]);
  });

  it('should return same array when function return truthy values for all array elements', function() {
    assert.deepEqual(filter(truthy,[1,2,3,4,5]),[1,2,3,4,5]);
  });

  it('should return empty array when function returns falsy values for all array elements', function(){
    assert.deepEqual(filter(falsy,[1,2,3,4]),[]);
  });
});

describe('reduce', function() {
  it('should return value as per mapper function suppose to return while initial value is provided', function() {
    assert.deepEqual(reduce(sum,[],1),1);
    assert.deepEqual(reduce(sum,[2],2),4);
    assert.deepEqual(reduce(sum,[1,2,3],1),7);
  });

  it('should return empty array when initial value is not provided', function() {
    assert.deepEqual(reduce(sum,[1]),1);
    assert.deepEqual(reduce(sum,[1,2,3]),6);
  });

  it('should return undefined when initial value and array elements both are not provided', function() {
    assert.deepEqual(reduce(sum,[]),undefined);
  });
});

