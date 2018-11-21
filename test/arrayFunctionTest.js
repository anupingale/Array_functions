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
  return number-1;
}

const checkAge = function(age){
  return age > 10;
}

const sum = function(number1, number2) {
  return number1+number2;
}

describe('map' , function() {
  it('should return empty array when input is empty array', function() {
    assert.deepEqual(map(increment,[]),[]);
  });
  it('should preserve the length of array', function() {
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
  describe('sum', function() {
    it('should return sum of 2 numbers', function() {
      assert.deepEqual(reduce([2,3],sum,1),6);
    })
    it('should return sum of multiple numbers in array', function() {
      assert.deepEqual(reduce([1,2,3,4,5,6],sum,1),22);
    })
    it('should return sum of 2 numbers with no initial value', function() {
      assert.deepEqual(reduce([1,2],sum,0),3);
    })
    it('should return sum of multiple numbers', function() {
      assert.deepEqual(reduce([1,2,3,4,5,6],sum,0),21);
    })
    it('should return when initial value is undefined', function() {
      assert.deepEqual(reduce([1,2,3],sum),6);
    })
    it('should concat strings', function() {
      assert.deepEqual(reduce(["a","b","c"],sum,""),"abc")
    })
  })
})

