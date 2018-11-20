const assert = require("assert");
const arrayFunctions = require("../src/arrayFunctions.js");
const printLog = require("../testScript/logReporter.js").printLog;
const {map} = arrayFunctions;

const checkAssert = function(functionName,args,actual,expected){
  printLog(functionName,args,actual,expected);
  assert.deepEqual(actual,expected);
}

const increment = function(number){
  return number + 1;
}

const testMap = function(){
  checkAssert("No values",[],map([],increment),[]);
  checkAssert("Single value","2",map([0],increment),[1]);
  checkAssert("Multiple values","2",map([1,2],increment),[2,3]);
  console.log("\n --------testcases for map executed properly------- \n");
}

testMap();
