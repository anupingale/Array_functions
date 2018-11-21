const map = function(array,mapper) {
  let mappedElements = [];
  for(element of array) {
    mappedElements.push(mapper(element));
  }
  return mappedElements;
}

const filter = function(array,predicate) {
  let filteredElements = [];
  for(element of array) {
    if(predicate(element)){
      filteredElements.push(element);
    }
  }
  return filteredElements;
}

const reduce = function(array,reducer,initialValue) {
  let result = initialValue;
  let startingIndex = 0;
  if(initialValue == undefined) {
    result = array[0];
    startingIndex = 1;
  }
  for(let index = startingIndex; index < array.length; index++) {
    result = reducer(result,array[index]);
  }
  return result;
}

module.exports = {map,filter,reduce};
