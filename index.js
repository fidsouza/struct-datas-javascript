function quickSort(arr) {
  const pivot = arr[0];
  let left = [];
  let rigth = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr.length);

    if (arr[i] > pivot) {
      rigth.push(arr[i]);
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
  }
  return rigth;
}

console.log(quickSort([5, 4, 3, 2, 1]));
