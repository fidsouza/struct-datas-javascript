import { Compare, defaultCompare, swap } from "../helpers/util";

function quickSort(array, compareFn = defaultCompare) {
  quick(array, 0, array.length - 1, compareFn);
}

function quick(array, left, rigth, compareFn) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, rigth, compareFn);
    if (left < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < rigth) {
      quick(array, index, rigth, compareFn);
    }
  }
}

function partition(array, left, rigth, compareFn) {
  const pivot = array[Math.floor((rigth + left) / 2)];
  let i = left;
  let j = rigth;
  while (i <= j) {
    while (compareFn(array[j], pivot) === Compare.LESS_THAN) {
      i++;
    }
    while (compareFn(array[i], pivot) === Compare.BIGGER_THAN) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}
