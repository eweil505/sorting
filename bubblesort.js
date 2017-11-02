function bubbleSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
 
  var lastCheck = arr.length - 1;
  
  while (lastCheck >= 0) {
      debugger
      
    for (var i = 0; i < arr.length; i++) {
    
      var l1 = i;
      var l2 = i + 1;
  
      if (arr[i] > arr[i+1]) {
        var swapped = swap(l1, l2, arr);
       
      }
      arr = swapped;
    }
   
    lastCheck--;
  }

  return arr;


  // going through the array and checking the two numbers and i and i + 1
  // if the one at i + 1 > i, then swap
  // then go to the next index and check that
  // it stops one from the end each iteration
  // we end when the second index is the same as the first index isn;t a valid array index valye (-1)
}

function swap(idx1, idx2, arr) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

function swap2(num1, num2, arr) { //4, 2
    var swappedArray = [];
    for (var i = 0; i < arr.length; i++) { //
        if (i === arr.indexOf(num1)) { 
            swappedArr.push(arr.indexOf(num2)); //[2]
        } else if (i === arr.indexOf(num2)) { //[2, 4]
            swappedArr.push(arr.indexOf(num1))
        } else {
            swappedArr.push(arr[i]); //[2, 4, 10, 1, 5]
        }

    }

    return swappedArray; //[2,4,10,1,5]
}

//produce new array in which everything is the same except the two numbers are swapped
//array at l1's index is now array at l2's index and vice-versa 
