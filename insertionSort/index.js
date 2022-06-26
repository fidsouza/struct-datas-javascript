import { Compare, defaultCompare } from "../helpers/util.js";

function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let temp = null;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[j];
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }

  return array;
}

console.log(insertionSort([7, 2, 1, 1, 1, 123, 32]));
