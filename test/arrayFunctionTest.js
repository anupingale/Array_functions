const assert = require("assert");
const arrayFunctions = require("../src/arrayFunctions.js");
const printLog = require("../testScript/logReporter.js").printLog;
const {map,filter} = arrayFunctions;

const checkAssert = function(functionName,args,actual,expected){
  printLog(functionName,args,actual,expected);
  assert.deepEqual(actual,expected);
}

const increment = function(number){
  return number + 1;
}

const checkAge = function(age){
  return age > 10;
}

const testMap = function(){
  checkAssert("No values",[],map([],increment),[]);
  checkAssert("Single value","2",map([0],increment),[1]);
  checkAssert("Multiple values","2",map([1,2],increment),[2,3]);
}

const testFilter = function(){
  checkAssert("No value",[],filter([],checkAge),[]);
  checkAssert("lesser value",[1],filter([1],checkAge),[]);
  checkAssert("greater value",[20],filter([20],checkAge),[20]);
  checkAssert("multiple values",[20,30,40],filter([20,30,40],checkAge),[20,30,40]);
  checkAssert("Mixed values",[1,2,30],filter([1,2,30],checkAge),[30]);
}

testFilter();
testMap();
