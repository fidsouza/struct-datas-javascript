const array = [1, 2, 3, 4, 5, 10, 21, 12, 32];

function removeItemArray(array, position, quantity) {
  return array.splice(position, quantity);
}

function addItemArray(array, position, quantity, ...args) {
  return array.splice(position, quantity, ...args);
}

removeItemArray(array, 0, 2);
addItemArray(array, 0, 0, 11, 12);
console.log(`result`, array);
