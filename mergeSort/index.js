import { Compare, defaultCompare, swap } from "../helpers/util.js";

function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const rigth = mergeSort(array.slice(middle, length), compareFn);
    array = merge(left, rigth, compareFn);
  }
  console.log(`este e o array`, array);
  return array;
}
function merge(left, rigth, compareFn) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < rigth.length) {
    result.push(
      compareFn(left[i], rigth[j]) === Compare.LESS_THAN
        ? left[i++]
        : rigth[j++]
    );
  }
  return result.concat(i < left.length ? left.slice(i) : rigth.slice(j));
}
function createdNonSortedArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

let array = createdNonSortedArray(5);
// console.log(array.join());
array = mergeSort([32, 12, 44, 666, 11, 2, 5]);
// console.log(array.join());
