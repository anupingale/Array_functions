const map = function(array,mapper) {
  let mappedElements = [];
  for(element of array) {
    mappedElements.push(mapper(element));
  }
  return mappedElements;
}

const filter = function(array,functionName) {
  let filteredElement = [];
  for(let index = 0; index < array.length; index++) {
    let element = functionName(array[index]);
    if(element){
      filteredElement.push(array[index]);
    }
  }
  return filteredElement;
}

const reduce = function(array,functionName,initialValue) {
  let result = initialValue;
  let startingIndex = 0;
  if(initialValue == undefined) {
    result = array[0];
    startingIndex = 1;
  }
  for(let index = startingIndex; index < array.length; index++) {
    result = functionName(result,array[index]);
  }
  return result;
}

module.exports = {map,filter,reduce};
