function countingSort(array) {
  if (array.length < 2) return array;
  const maxValue = array.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);
  const counts = new Array(maxValue + 1);
  array.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 0;
    }
    counts[element]++;
  });
  let sortIndex = 0;
  counts.forEach((count, i) => {
    console.log(count, i);
    while (count > 0) {
      array[sortIndex++] = i;
      count--;
    }
  });
  return array;
}

function createdNonSortedArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

let array = createdNonSortedArray(5);
console.log(array.join());
array = countingSort([32, 12, 44, 666, 2, 666, 666, 11, 2, 5, 1]);
console.log(array.join());
