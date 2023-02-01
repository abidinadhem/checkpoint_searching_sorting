function insertionSort(arr=[3,4,23,55,43,66,55]) {
    for (var i = 1; i < arr.length; i++) {
      var j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }
    }
    return arr;
  }
  console.log(insertionSort())