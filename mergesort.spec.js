describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        expect(split([3, 5, 6, 1, 9])).toEqual([[3, 5],[6, 1, 9]]);
    });

});

describe('Merge Sort', function() {
    it('is able to merge two sorted arrays into one sorted array', function(){
        expect(mergeSort([5, 2, 8, 1])).toEqual([1, 2, 5, 8]);
    })
})