const map = function(mapper,array) {
  let mappedElements = [];
  for(element of array) {
    mappedElements.push(mapper(element));
  }
  return mappedElements;
}

const filter = function(predicate,array) {
  let filteredElements = [];
  for(element of array) {
    if(predicate(element)){
      filteredElements.push(element);
    }
  }
  return filteredElements;
}

const reduce = function(reducer,array,accumulator) {
  let result = accumulator;
  let index = 0;
  if(accumulator == undefined) {
    result = array[0];
    index = 1;
  }
  while(index < array.length) {
    result = reducer(result,array[index++]);
  }
  return result;
}

module.exports = {map,filter,reduce};
