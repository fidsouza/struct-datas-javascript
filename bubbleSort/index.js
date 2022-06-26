import { Compare, defaultCompare, swap } from "../helpers/util.js";

function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function modifiedBubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin = null;
  for (let i = 0; i < length; i++) {
    indexMin = i;
    for (let j = 0; j < length; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
}

function createdNonSortedArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

export function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let temp = null;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }

    array[j] = temp;
  }
  return array;
}

// let array = createdNonSortedArray(22);
// console.log(array.join());
// array = insertionSort([3, 2, 1]);
// console.log(array.join());
