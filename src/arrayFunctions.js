const map = function(array,functionName) {
  let mappedElements = [];
  for(let index = 0; index < array.length; index++) {
    mappedElements.push(functionName(array[index]));
  }
  return mappedElements;
}

exports.map = map;
