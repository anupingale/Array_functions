const map = function(array,functionName) {
  let mappedElements = [];
  for(let index = 0; index < array.length; index++) {
    mappedElements.push(functionName(array[index]));
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

module.exports = {map,filter};
