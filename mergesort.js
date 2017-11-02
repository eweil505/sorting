function split(wholeArray) {
var halfIdx = Math.floor(wholeArray.length/2);
var firstHalf = wholeArray.slice(0, halfIdx);
var secondHalf = wholeArray.slice(halfIdx)

return [firstHalf, secondHalf]
}

function merge(arr1, arr2) {
    var merged = [],
    i = 0, 
    j = 0;;
    while (merged.length < (arr1.length + arr2.length)) {
        var el1 = arr1[i];
        var el2 = arr2[j];

        if (el1 < el2) {
            merged.push(el1);
        }
    }
}

function mergeSort(array) {
    var temp = [];

    if (array.length === 1) {
        
    } 
    else {
        var halved = split(array); // [3, 5], [6, 1, 9]

        //check first half

        if (halved[0][0] > halved[0][1]) {
            halved[0] = swap(0, 1, halved[0]);
            
        }
        
        halved[1] = split(halved[1]); //[6], [1, 9];


        
        

        halved.forEach(function(half, startIdx) {
            if (half.length > 1) {
                mergeSort(half);
            } else {
    

            }
        })


    }
}

function swap(idx1, idx2, arr) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
}

