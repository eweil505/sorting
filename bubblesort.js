function bubbleSort(arr) {
  var lastCheck = arr.length - 1;

  while (lastCheck >= 0) {
    for (var i = 0; i < arr.length; i++) {
      var l1 = arr[i];
      var l2 = arr[i + 1];

      if (l1 > l2) {
        swap(l1, l2);
      }
    }

    lastCheck--;
  }


  // going through the array and checking the two numbers and i and i + 1
  // if the one at i + 1 > i, then swap
  // then go to the next index and check that
  // it stops one from the end each iteration
  // we end when the second index is the same as the first index isn;t a valid array index valye (-1)
}

function swap(num1, num2) {

}
